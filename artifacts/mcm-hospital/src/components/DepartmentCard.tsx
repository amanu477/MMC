import { DEPARTMENTS } from "@/data/departments";
import { iconFor } from "@/data/department-icons";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { MouseEvent, useRef } from "react";

const FALLBACK =
  "https://www.mcmkoreanhospital.org/storage/about_us/27112024/About_3216.jpg";

export function DepartmentCard({
  dept,
  index,
}: {
  dept: (typeof DEPARTMENTS)[number];
  index: number;
}) {
  const reduce = useReducedMotion();
  const Icon = iconFor(dept.id);
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });
  const glowX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(my, [-0.5, 0.5], ["0%", "100%"]);
  const glowBg = useTransform(
    [glowX, glowY] as never,
    ([x, y]: string[]) =>
      `radial-gradient(420px circle at ${x} ${y}, rgba(3,28,61,0.10), transparent 60%)`
  );

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: (index % 6) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={
        reduce
          ? undefined
          : { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", perspective: 1000 }
      }
      className="group relative h-full"
    >
      <div className="absolute -inset-px rounded-[1.25rem] bg-gradient-to-br from-secondary/0 via-primary/0 to-secondary/0 group-hover:from-secondary/60 group-hover:via-primary/30 group-hover:to-secondary/60 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none" />

      <div className="relative bg-white rounded-2xl border border-border/60 overflow-hidden h-full flex flex-col shadow-sm group-hover:shadow-2xl transition-shadow duration-500">
        <motion.div
          aria-hidden
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={reduce ? undefined : { background: glowBg }}
        />

        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={dept.imageUrl}
            alt={dept.name}
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = FALLBACK;
            }}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/30" />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -inset-x-full -top-1/2 h-[200%] w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-150%] group-hover:translate-x-[350%] transition-transform duration-1000 ease-out" />
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-1.5">
            <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">
              Dept
            </span>
            <span className="text-sm font-mono font-semibold text-white tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="absolute top-4 left-4">
            <div className="relative">
              <span
                aria-hidden
                className="absolute inset-0 rounded-xl bg-secondary/60 opacity-0 group-hover:opacity-100 group-hover:animate-ping"
              />
              <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/95 backdrop-blur text-primary shadow-lg ring-1 ring-primary/10 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <Icon size={22} />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white leading-tight drop-shadow-lg">
              {dept.name}
            </h3>
            <span className="block mt-2 h-[2px] w-10 bg-secondary group-hover:w-24 transition-all duration-500 ease-out" />
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1 relative">
          <p className="text-muted-foreground text-sm leading-relaxed flex-1">
            {dept.description}
          </p>
          <Link href={`/doctors?department=${dept.id}`} className="mt-6">
            <Button
              variant="ghost"
              className="w-full justify-between text-primary hover:bg-primary/5 hover:text-primary group/btn"
            >
              <span className="font-medium">View Doctors</span>
              <span className="relative inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/5 group-hover/btn:bg-primary group-hover/btn:text-white transition-all duration-300">
                <ArrowRight
                  size={14}
                  className="group-hover/btn:translate-x-0.5 transition-transform"
                />
              </span>
            </Button>
          </Link>
        </div>

        <span aria-hidden className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-secondary to-transparent group-hover:w-full transition-all duration-700" />
        <span aria-hidden className="absolute bottom-0 right-0 h-px w-0 bg-gradient-to-l from-secondary to-transparent group-hover:w-full transition-all duration-700" />
        <span aria-hidden className="absolute top-0 left-0 w-px h-0 bg-gradient-to-b from-secondary to-transparent group-hover:h-full transition-all duration-700 delay-100" />
        <span aria-hidden className="absolute bottom-0 right-0 w-px h-0 bg-gradient-to-t from-secondary to-transparent group-hover:h-full transition-all duration-700 delay-100" />
      </div>
    </motion.div>
  );
}
