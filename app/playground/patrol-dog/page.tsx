import PatrolDog, { type DogAnimation } from "@/components/PatrolDog";
import PixelSprite from "@/components/PatrolDog/PixelSprite";
import { DOG_FRAMES, DOG_PALETTE } from "@/components/PatrolDog/sprites";

const BACKGROUNDS = [
  { bg: "var(--light-font)", fg: "var(--dark-font)" },
  { bg: "var(--dark-font)", fg: "var(--light-font)" },
];

const ANIMATIONS: DogAnimation[] = ["idle", "walk", "inspect", "salute"];

const Grid = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>{children}</div>
);

const Cell = ({ label, bg, fg, children }: { label: string; bg: string; fg: string; children: React.ReactNode }) => (
  <figure style={{ margin: 0, textAlign: "center" }}>
    <div style={{ background: bg, color: fg, padding: 16 }}>{children}</div>
    <figcaption>{label}</figcaption>
  </figure>
);

export default function PatrolDogPlaygroundPage() {
  return (
    <div style={{ display: "grid", gap: 40, padding: "40px 16px" }}>
      <section>
        <h2>Animations</h2>
        <Grid>
          {ANIMATIONS.map((animation) =>
            BACKGROUNDS.map(({ bg, fg }) => (
              <Cell key={animation + bg} label={animation} bg={bg} fg={fg}>
                <PatrolDog animation={animation} scale={6} />
              </Cell>
            )),
          )}
        </Grid>
      </section>
      <section>
        <h2>Frames</h2>
        <Grid>
          {Object.entries(DOG_FRAMES).map(([name, rows]) => (
            <Cell key={name} label={name} {...BACKGROUNDS[0]}>
              <PixelSprite rows={rows} palette={DOG_PALETTE} scale={4} />
            </Cell>
          ))}
        </Grid>
      </section>
    </div>
  );
}
