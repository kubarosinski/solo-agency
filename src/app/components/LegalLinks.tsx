import Link from "next/link";

export default function LegalLinks() {
  return (
    <nav aria-label="Informacje prawne">
      <ul className="list-none m-0 p-0 flex flex-wrap gap-x-6 gap-y-2">
        <li>
          <Link href="/regulamin" className="text-[10px] tracking-[0.18em] uppercase font-medium nav-link">
            Regulamin
          </Link>
        </li>
        <li>
          <Link href="/polityka-prywatnosci" className="text-[10px] tracking-[0.18em] uppercase font-medium nav-link">
            Polityka prywatności
          </Link>
        </li>
      </ul>
    </nav>
  );
}
