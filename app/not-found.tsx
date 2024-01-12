import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <section className="flex flex-col items-center justify-center gap-0 w-full">
        <img
          src="/images/404.png"
          width={500}
          height={500}
          alt="404"
          className="w-[500px] h-[500px]"
        />
      </section>
      <p className="text-[0.75rem] md:text-[1.5rem] font-[400]">
        به نظر می‌رسد صفحه‌ای که به دنبال آن می‌گردید دردسترس نیست.
      </p>

      <a
        className="mt-[80px] md:mt-[38px] bg-[var(--secondary)] text-[0.75rem] md:text-[1rem] font-[700] flex flex-col items-center justify-center rounded-2xl text-[#FFC453] w-[150px] md:w-[176px] h-[46px] md:h-[52px] text-center"
        href="/"
      >
        بازگشت به صفحه اصلی
      </a>
    </div>
  );
}
