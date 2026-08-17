export default function Ads() {
  return (
    <section className="py-6">
      <div className="border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl p-6 bg-neutral-50 dark:bg-neutral-900/50 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
          Sponsored
        </p>
        {/* Replace the placeholder below with your ad tag, e.g. Google AdSense <ins> element */}
        <div className="h-20 flex items-center justify-center">
          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            Your ad here. Contact{" "}
            <a
              href="mailto:haileycheng@proton.me"
              className="underline hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
            >
              haileycheng@proton.me
            </a>{" "}
            for sponsorship.
          </p>
        </div>
      </div>
    </section>
  );
}
