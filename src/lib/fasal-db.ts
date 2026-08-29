/**
 * Fasal Certificate – Off-chain Database Interface
 *
 * Stores & retrieves the human-readable certificate data.
 * Falls back to localStorage when Supabase is not configured.
 */

import { supabaseConfigured } from "@/lib/supabase";
import { supabaseRequest } from "@/blockchain/rest";

// ── Types ──────────────────────────────────────────────────────────────

export interface FasalCertificate {
  id: string;
  userId: string;
  crop: string;
  quantity: string;
  harvestDate: string;
  location: string;
  photoUrl: string | null;
  dataHash: string;
  transactionHash: string | null;
  isDemo: boolean;
  createdAt: string;
}

interface FasalCertificateRow {
  id: string;
  user_id: string;
  crop: string;
  quantity: string;
  harvest_date: string;
  location: string;
  photo_url: string | null;
  data_hash: string;
  transaction_hash: string | null;
  is_demo: boolean;
  created_at: string;
}

// ── Mapping ────────────────────────────────────────────────────────────

function toModel(row: FasalCertificateRow): FasalCertificate {
  return {
    id: row.id,
    userId: row.user_id,
    crop: row.crop,
    quantity: row.quantity,
    harvestDate: row.harvest_date,
    location: row.location,
    photoUrl: row.photo_url,
    dataHash: row.data_hash,
    transactionHash: row.transaction_hash,
    isDemo: row.is_demo,
    createdAt: row.created_at,
  };
}

// ── localStorage Fallback ──────────────────────────────────────────────

const LS_KEY = "beejmantra.fasal_certificates";

function readLocalCerts(): FasalCertificate[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? (JSON.parse(raw) as FasalCertificate[]) : [];
  } catch {
    return [];
  }
}

function writeLocalCerts(certs: FasalCertificate[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LS_KEY, JSON.stringify(certs));
}

// ── Public API ─────────────────────────────────────────────────────────

export async function saveFasalCertificate(
  token: string | null,
  cert: FasalCertificate,
): Promise<void> {
  if (supabaseConfigured && token) {
    await supabaseRequest("/rest/v1/fasal_certificates", {
      method: "POST",
      token,
      headers: { Prefer: "return=minimal" },
      body: [
        {
          id: cert.id,
          user_id: cert.userId,
          crop: cert.crop,
          quantity: cert.quantity,
          harvest_date: cert.harvestDate,
          location: cert.location,
          photo_url: cert.photoUrl,
          data_hash: cert.dataHash,
          transaction_hash: cert.transactionHash,
          is_demo: cert.isDemo,
          created_at: cert.createdAt,
        },
      ],
    });
  } else {
    const all = readLocalCerts();
    all.unshift(cert);
    writeLocalCerts(all);
  }
}

export async function fetchFasalCertificate(
  certificateId: string,
): Promise<FasalCertificate | null> {
  if (supabaseConfigured) {
    try {
      const rows = await supabaseRequest<FasalCertificateRow[]>(
        "/rest/v1/fasal_certificates",
        {
          query: {
            select: "*",
            id: `eq.${certificateId}`,
            limit: 1,
          },
        },
      );
      return rows.length > 0 ? toModel(rows[0]) : null;
    } catch {
      // Fall back to localStorage
    }
  }

  const all = readLocalCerts();
  return all.find((c) => c.id === certificateId) || null;
}

export async function fetchUserCertificates(
  token: string | null,
  userId: string,
): Promise<FasalCertificate[]> {
  if (supabaseConfigured && token) {
    try {
      const rows = await supabaseRequest<FasalCertificateRow[]>(
        "/rest/v1/fasal_certificates",
        {
          token,
          query: {
            select: "*",
            user_id: `eq.${userId}`,
            order: "created_at.desc",
          },
        },
      );
      return rows.map(toModel);
    } catch {
      // Fall back
    }
  }

  return readLocalCerts().filter((c) => c.userId === userId);
}
