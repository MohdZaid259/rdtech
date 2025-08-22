import { FadeIn } from "../ui/fade-in";

export default function SectionHeader({
  title,
  subTitle,
  titleColor = "text-white bg-primary",
  subTitleColor = "text-muted-foreground",
}: {
  readonly title: string;
  readonly subTitle: string;
  readonly titleColor?: string;
  readonly subTitleColor?: string;
}) {
  return (
    <div className="p-4 flex flex-col items-center mb-2 md:mb-8 text-center">
      <FadeIn>
        <h2
          className={`text-xl md:text-3xl font-bold backdrop-blur-md py-2 px-6 rounded-full shadow-lg ${titleColor}`}
        >
          {title}
        </h2>
      </FadeIn>
      <FadeIn delay={100}>
        <p
          className={`mt-4 max-w-2xl text-base md:text-lg leading-relaxed ${subTitleColor}`}
        >
          {subTitle}
        </p>
      </FadeIn>
    </div>
  );
}
