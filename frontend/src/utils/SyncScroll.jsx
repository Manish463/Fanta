import { useEffect } from "react";

const SECTION_ID = ["home", "products", "about", "blogs", "faq", "contact"];

export const SyncScroll = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            history.replaceState(null, "", `#${id}`);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    SECTION_ID.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};