"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  Link2,
  ExternalLink,
  Wheat,
  Package,
  Calendar,
  MapPin,
  Clock,
  Shield,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchFasalCertificate, type FasalCertificate } from "@/lib/fasal-db";
import { hashCropData, type CropData } from "@/blockchain/fasal-blockchain";
import Image from "next/image";

// ── Page Component ─────────────────────────────────────────────────────

export default function VerifyPage({
  params,
}: {
  params: Promise<{ certificateId: string }>;
}) {
  const { certificateId } = use(params);
  const [certificate, setCertificate] = useState<FasalCertificate | null>(null);
  const [loading, setLoading] = useState(true);
  const [integrityValid, setIntegrityValid] = useState<boolean | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const cert = await fetchFasalCertificate(certificateId);
        setCertificate(cert);

        if (cert) {
          // Recompute hash and verify integrity
          const cropData: CropData = {
            crop: cert.crop,
            quantity: cert.quantity,
            harvestDate: cert.harvestDate,
            location: cert.location,
          };
          const recomputedHash = await hashCropData(cropData);
          setIntegrityValid(recomputedHash === cert.dataHash);
        }
      } catch (err) {
        console.error("Failed to load certificate", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [certificateId]);

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return iso;
    }
  };

  const formatDateTime = (iso: string) => {
    try {
      return new Date(iso).toLocaleString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return iso;
    }
  };

  const shortenHash = (hash: string) =>
    hash.length > 12 ? `${hash.slice(0, 6)}...${hash.slice(-4)}` : hash;

  const explorerUrl = certificate?.transactionHash
    ? certificate.isDemo
      ? "#"
      : `https://sepolia.etherscan.io/tx/${certificate.transactionHash}`
    : "#";

  // ── Loading State ────────────────────────────────────────────────────

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#070908" }}
      >
        <div className="text-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin mx-auto" style={{ color: "#19C866" }} />
          <p style={{ color: "#9AA39E" }}>Verifying certificate...</p>
        </div>
      </div>
    );
  }

  // ── Not Found ────────────────────────────────────────────────────────

  if (!certificate) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ background: "#070908" }}
      >
        <Card
          className="max-w-md w-full text-center"
          style={{
            background: "#151817",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <CardContent className="py-12 space-y-4">
            <XCircle className="h-16 w-16 mx-auto text-red-400" />
            <h2 className="text-xl font-bold" style={{ color: "#F5F7F5" }}>
              Certificate Not Found
            </h2>
            <p className="text-sm" style={{ color: "#9AA39E" }}>
              The certificate ID <span className="font-mono">{certificateId}</span> was
              not found. It may have been created on a different device.
            </p>
            <Button asChild variant="outline" className="mt-4">
              <Link href="/">Go to BeejMantra</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ── Verified ─────────────────────────────────────────────────────────

  return (
    <div
      className="min-h-screen px-4 py-10"
      style={{ background: "#070908" }}
    >
      <div className="mx-auto max-w-lg space-y-6">
        {/* Logo */}
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/favicon.ico"
              alt="BeejMantra Logo"
              width={24}
              height={24}
            />
            <span className="text-lg font-bold font-headline" style={{ color: "#19C866" }}>
              BeejMantra
            </span>
          </div>
          <p className="text-sm" style={{ color: "#9AA39E" }}>
            Certificate Verification
          </p>
        </div>

        {/* Main Card */}
        <Card
          className="overflow-hidden"
          style={{
            background: "#151817",
            border: "1px solid rgba(25, 200, 102, 0.2)",
            boxShadow: "0 0 30px rgba(25, 200, 102, 0.06)",
          }}
        >
          {/* Top accent */}
          <div
            className="h-1 w-full"
            style={{
              background: "linear-gradient(90deg, #075A32, #19C866, #075A32)",
            }}
          />

          <CardContent className="p-6 space-y-6">
            {/* Status Badge */}
            <div className="text-center">
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold"
                style={{
                  background: "rgba(25, 200, 102, 0.12)",
                  border: "1px solid rgba(25, 200, 102, 0.35)",
                  color: "#19C866",
                }}
              >
                <CheckCircle2 className="h-5 w-5" />
                {certificate.isDemo
                  ? "VERIFIED RECORD (DEMO)"
                  : "VERIFIED RECORD"}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              {/* Certificate ID */}
              <div
                className="flex justify-between items-center py-3 px-4 rounded-lg"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <span className="text-xs uppercase tracking-wider" style={{ color: "#9AA39E" }}>
                  Certificate ID
                </span>
                <span className="font-mono font-bold text-sm" style={{ color: "#F5F7F5" }}>
                  {certificate.id}
                </span>
              </div>

              {/* Crop */}
              <div className="flex items-center gap-3 py-2">
                <Wheat className="h-5 w-5 shrink-0" style={{ color: "#19C866" }} />
                <div>
                  <p className="text-xs" style={{ color: "#9AA39E" }}>Crop</p>
                  <p className="font-semibold" style={{ color: "#F5F7F5" }}>
                    {certificate.crop}
                  </p>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3 py-2">
                <Package className="h-5 w-5 shrink-0" style={{ color: "#19C866" }} />
                <div>
                  <p className="text-xs" style={{ color: "#9AA39E" }}>Quantity</p>
                  <p className="font-semibold" style={{ color: "#F5F7F5" }}>
                    {certificate.quantity}
                  </p>
                </div>
              </div>

              {/* Harvest Date */}
              <div className="flex items-center gap-3 py-2">
                <Calendar className="h-5 w-5 shrink-0" style={{ color: "#19C866" }} />
                <div>
                  <p className="text-xs" style={{ color: "#9AA39E" }}>Harvest Date</p>
                  <p className="font-semibold" style={{ color: "#F5F7F5" }}>
                    {formatDate(certificate.harvestDate)}
                  </p>
                </div>
              </div>

              {/* Recorded At */}
              <div className="flex items-center gap-3 py-2">
                <Clock className="h-5 w-5 shrink-0" style={{ color: "#19C866" }} />
                <div>
                  <p className="text-xs" style={{ color: "#9AA39E" }}>Recorded</p>
                  <p className="font-semibold" style={{ color: "#F5F7F5" }}>
                    {formatDateTime(certificate.createdAt)}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 py-2">
                <MapPin className="h-5 w-5 shrink-0" style={{ color: "#19C866" }} />
                <div>
                  <p className="text-xs" style={{ color: "#9AA39E" }}>Location</p>
                  <p className="font-semibold" style={{ color: "#F5F7F5" }}>
                    {certificate.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div
              className="h-px w-full"
              style={{ background: "rgba(25, 200, 102, 0.15)" }}
            />

            {/* Blockchain Details */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span style={{ color: "#9AA39E" }}>Blockchain Transaction</span>
                <span className="font-mono text-xs" style={{ color: "#F5F7F5" }}>
                  {shortenHash(certificate.transactionHash || "N/A")}
                </span>
              </div>

              {/* Data Integrity */}
              <div
                className="flex items-center gap-2 py-3 px-4 rounded-lg"
                style={{
                  background:
                    integrityValid === true
                      ? "rgba(25, 200, 102, 0.08)"
                      : "rgba(239, 68, 68, 0.08)",
                  border: `1px solid ${
                    integrityValid === true
                      ? "rgba(25, 200, 102, 0.2)"
                      : "rgba(239, 68, 68, 0.2)"
                  }`,
                }}
              >
                {integrityValid === true ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-400 shrink-0" />
                )}
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{
                      color: integrityValid === true ? "#19C866" : "#ef4444",
                    }}
                  >
                    Data Integrity
                  </p>
                  <p className="text-xs" style={{ color: "#9AA39E" }}>
                    {integrityValid === true
                      ? "✓ Record has not been modified"
                      : "✗ Record integrity check failed"}
                  </p>
                </div>
              </div>
            </div>

            {/* View Blockchain Transaction Button */}
            {certificate.transactionHash && (
              <Button
                asChild
                className="w-full"
                variant={certificate.isDemo ? "outline" : "default"}
              >
                <a
                  href={explorerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (certificate.isDemo) e.preventDefault();
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {certificate.isDemo
                    ? "Demo Mode – No live transaction"
                    : "View Blockchain Transaction →"}
                </a>
              </Button>
            )}

            {/* Demo Mode Notice */}
            {certificate.isDemo && (
              <p
                className="text-xs text-center"
                style={{ color: "#9AA39E" }}
              >
                This certificate was generated in demo mode. No real blockchain
                transaction was recorded.
              </p>
            )}
          </CardContent>

          {/* Bottom accent */}
          <div
            className="h-1 w-full"
            style={{
              background: "linear-gradient(90deg, #075A32, #19C866, #075A32)",
            }}
          />
        </Card>

        {/* Footer */}
        <div className="text-center">
          <Button asChild variant="ghost" size="sm">
            <Link href="/" style={{ color: "#9AA39E" }}>
              Powered by BeejMantra
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
