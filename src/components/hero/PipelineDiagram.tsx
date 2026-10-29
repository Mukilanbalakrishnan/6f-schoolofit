import React, { useState, useEffect } from 'react';
import {
  FileCode,
  GitPullRequest,
  Zap,
  Box,
  Layers,
  Cloud,
  Activity,
  CheckCircle2,
  Terminal,
  Play,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Stage {
  id: string;
  name: string;
  shortLabel: string;
  icon: React.ElementType;
  status: 'Complete' | 'Active' | 'Healthy';
  metric: string;
  commandSnippet: string;
  detail: string;
  techs: string[];
}

export const PipelineDiagram: React.FC = () => {
  const stages: Stage[] = [
    {
      id: 'code',
      name: 'Code',
      shortLabel: 'Code',
      icon: FileCode,
      status: 'Complete',
      metric: 'TypeScript & Python',
      commandSnippet: 'git commit -m "feat(api): optimize connection pool"',
      detail: 'Type-safe services with strict unit tests and pre-commit hooks.',
      techs: ['VS Code', 'Git', 'Prettier'],
    },
    {
      id: 'github',
      name: 'GitHub',
      shortLabel: 'GitHub',
      icon: GitPullRequest,
      status: 'Complete',
      metric: 'PR #142 Merged',
      commandSnippet: 'gh pr merge 142 --squash --delete-branch',
      detail: 'Protected branch rules with required peer review approvals.',
      techs: ['GitHub', 'Git Flow'],
    },
    {
      id: 'cicd',
      name: 'CI/CD',
      shortLabel: 'CI/CD',
      icon: Zap,
      status: 'Complete',
      metric: 'Checks passed (42s)',
      commandSnippet: 'actions/workflow: lint, test, security-scan',
      detail: 'Automated parallel linting, test runs, and image builds.',
      techs: ['GitHub Actions', 'Vitest'],
    },
    {
      id: 'docker',
      name: 'Docker',
      shortLabel: 'Docker',
      icon: Box,
      status: 'Complete',
      metric: 'Image: 38MB',
      commandSnippet: 'docker build --target prod -t app:v2.4 .',
      detail: 'Minimal multi-stage scratch image with non-root security.',
      techs: ['Docker', 'Multi-Stage', 'ECR'],
    },
    {
      id: 'k8s',
      name: 'Kubernetes',
      shortLabel: 'K8s',
      icon: Layers,
      status: 'Active',
      metric: '3/3 Pods Running',
      commandSnippet: 'helm upgrade --install api ./charts/api',
      detail: 'Zero-downtime rolling update with ingress health checks.',
      techs: ['Kubernetes', 'Helm', 'Ingress'],
    },
    {
      id: 'aws',
      name: 'AWS Cloud',
      shortLabel: 'AWS',
      icon: Cloud,
      status: 'Healthy',
      metric: 'Multi-AZ VPC',
      commandSnippet: 'terraform apply -var="env=production"',
      detail: 'Private subnets, ALB load distribution, and Aurora RDS.',
      techs: ['AWS VPC', 'EKS', 'RDS'],
    },
    {
      id: 'monitoring',
      name: 'Telemetry',
      shortLabel: 'Monitor',
      icon: Activity,
      status: 'Healthy',
      metric: 'p99: 14ms | 0 errors',
      commandSnippet: 'prometheus: rate(http_requests_total[5m])',
      detail: 'Live metric scraping, Grafana boards, and alert thresholds.',
      techs: ['Prometheus', 'Grafana'],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(4); // default K8s
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto progression every 3 seconds if playing
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stages.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isAutoPlaying, stages.length]);

  const selectedStage = stages[currentIndex];

  return (
    <div className="w-full rounded-3xl border border-[#E5E9F0] bg-white p-5 sm:p-7 shadow-lg shadow-blue-500/5 relative overflow-hidden text-left">
      {/* Background soft ambient indicator */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#2563EB]/10 via-sky-400/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 border-b border-[#E5E9F0]">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-[#151922] flex items-center gap-1.5">
            <span>Automated Deployment Pipeline</span>
            <Sparkles className="h-3 w-3 text-[#2563EB]" />
          </span>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#F7F9FC] border border-[#E5E9F0] px-2.5 py-1 text-[11px] font-bold text-[#626B78] hover:text-[#151922] transition-colors cursor-pointer"
            title={isAutoPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
          >
            {isAutoPlaying ? (
              <>
                <RotateCcw className="h-3 w-3 animate-spin text-[#2563EB]" />
                <span className="hidden sm:inline">Active Flow</span>
              </>
            ) : (
              <>
                <Play className="h-3 w-3 text-emerald-600" />
                <span className="hidden sm:inline">Paused</span>
              </>
            )}
          </motion.button>
          <span className="rounded-md bg-[#2563EB]/10 px-2 py-0.5 text-[10px] font-mono font-bold text-[#2563EB]">
            Step {currentIndex + 1}/7
          </span>
        </div>
      </div>

      {/* Nodes Row with connected lines */}
      <div className="py-6 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[540px] px-1">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = currentIndex === idx;
            return (
              <React.Fragment key={stage.id}>
                {/* Stage Button */}
                <button
                  type="button"
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsAutoPlaying(false);
                  }}
                  className="group flex flex-col items-center focus:outline-none transition-all cursor-pointer relative"
                  aria-label={`Inspect ${stage.name}`}
                >
                  <motion.div
                    animate={isSelected ? { scale: 1.15 } : { scale: 1 }}
                    transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                    className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border transition-all ${
                      isSelected
                        ? 'border-[#2563EB] bg-[#2563EB] text-white shadow-lg shadow-blue-500/25 ring-4 ring-[#2563EB]/20'
                        : 'border-[#E5E9F0] bg-[#F7F9FC] text-[#626B78] hover:border-[#2563EB]/40 hover:bg-white hover:text-[#151922]'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <span
                    className={`mt-2 text-[11px] tracking-tight font-bold ${
                      isSelected ? 'text-[#2563EB]' : 'text-[#626B78]'
                    }`}
                  >
                    {stage.shortLabel}
                  </span>
                </button>

                {/* Animated Connector Line */}
                {idx < stages.length - 1 && (
                  <div className="flex-1 flex items-center justify-center px-1.5">
                    <div className="h-[2.5px] w-full bg-[#E5E9F0] relative overflow-hidden rounded-full">
                      {idx < currentIndex && (
                        <div className="absolute inset-0 bg-[#2563EB]" />
                      )}
                      {idx === currentIndex && (
                        <motion.div
                          initial={{ left: '-100%' }}
                          animate={{ left: '100%' }}
                          transition={{ repeat: Infinity, duration: 1.1, ease: 'linear' }}
                          className="absolute top-0 bottom-0 w-2/3 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent"
                        />
                      )}
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Selected Stage Detail Terminal Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedStage.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl border border-[#E5E9F0] bg-[#F7F9FC] p-4 sm:p-5 text-left shadow-2xs"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <h4 className="text-sm sm:text-base font-bold text-[#151922]">
                Stage: {selectedStage.name}
              </h4>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800">
                <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                {selectedStage.status}
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-[#2563EB] bg-white px-2.5 py-1 rounded-lg border border-[#E5E9F0] shadow-2xs">
              {selectedStage.metric}
            </span>
          </div>

          <p className="mt-2 text-xs sm:text-sm text-[#626B78] leading-relaxed">
            {selectedStage.detail}
          </p>

          {/* Interactive Shell Snippet */}
          <div className="mt-3 flex items-center gap-2.5 rounded-xl bg-[#151922] px-3.5 py-2.5 text-xs font-mono text-emerald-400 overflow-x-auto shadow-inner">
            <Terminal className="h-4 w-4 text-zinc-400 shrink-0" />
            <span className="text-zinc-200 select-all">{selectedStage.commandSnippet}</span>
          </div>

          {/* Tech tags */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#626B78]">Tools:</span>
            {selectedStage.techs.map((t) => (
              <span
                key={t}
                className="rounded-md bg-white border border-[#E5E9F0] px-2.5 py-0.5 text-[10px] font-bold text-[#151922] shadow-2xs"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
