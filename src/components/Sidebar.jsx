import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">OPOS</h2>

      <nav>
        <ul>
          <li><Link href="/">🏠 Home</Link></li>
          <li><Link href="/vagas">💼 Vagas</Link></li>
          <li><Link href="/networking">👥 Networking</Link></li>
          <li><Link href="/ia">🤖 IA</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
