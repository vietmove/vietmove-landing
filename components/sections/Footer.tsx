import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'

const ecosystemLinks = [
  { vi: 'VietKick', en: 'VietKick', href: 'https://kick.vietmove.app' },
  { vi: 'Hệ sinh thái', en: 'Ecosystem', href: '#ecosystem' },
  { vi: 'Môn kế tiếp', en: 'Next sport', href: '#ecosystem' },
]

const companyLinks = [
  { vi: 'Ý nghĩa', en: 'Manifesto', href: '#manifesto' },
  { vi: 'Giá trị', en: 'Principles', href: '#principles' },
  { vi: 'FAQ', en: 'FAQ', href: '#faq' },
]

const connectLinks = [
  { vi: 'Liên hệ', en: 'Contact', href: 'mailto:hotro@vietmove.app' },
  { vi: 'Facebook', en: 'Facebook', href: '#' },
  { vi: 'YouTube', en: 'YouTube', href: '#' },
]

function FooterCol({ title, links }: { title: { vi: string; en: string }; links: typeof companyLinks }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] tracking-[0.16em] uppercase font-semibold text-white/50 mb-3.5">
        <span className="lang-vi">{title.vi}</span>
        <span className="lang-en">{title.en}</span>
      </h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.href + l.en}>
            <a href={l.href} className="text-[14px] text-white/85 hover:text-[var(--color-accent)] transition-colors">
              <span className="lang-vi">{l.vi}</span>
              <span className="lang-en">{l.en}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[var(--color-foreground)] text-[var(--color-background)] pt-[60px] pb-7">
      <Container>
        <div className="flex flex-col gap-9 lg:grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-9 mb-10">
          {/* Brand column */}
          <div>
            <Logo variant="light" className="mb-5" />
            <p className="text-[14px] text-white/60 max-w-[340px] mb-5 leading-[1.55]">
              <span className="lang-vi">Một phong trào khởi nguồn từ Việt Nam. Chúng tôi làm ra những sản phẩm thể thao của người Việt, bắt đầu từ VietKick.</span>
              <span className="lang-en">A movement built from Vietnam. We build made-in-Vietnam sports products, starting with VietKick.</span>
            </p>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--color-accent)]">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
              A movement built from Vietnam
            </span>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:col-span-3 lg:grid-cols-3">
            <FooterCol title={{ vi: 'Hệ sinh thái', en: 'Ecosystem' }} links={ecosystemLinks} />
            <FooterCol title={{ vi: 'Về chúng tôi', en: 'Company' }} links={companyLinks} />
            <FooterCol title={{ vi: 'Kết nối', en: 'Connect' }} links={connectLinks} />
          </div>
        </div>

        {/* Legal bar */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-2.5 pt-6 border-t border-white/10 text-[12px] text-white/50">
          <span>
            © 2026 VietMove Technologies JSC.{' '}
            <span className="lang-vi">Đã đăng ký bản quyền.</span>
            <span className="lang-en">All rights reserved.</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 21s-7-4.35-7-10a7 7 0 0114 0c0 5.65-7 10-7 10z" />
              <circle cx="12" cy="11" r="2.5" />
            </svg>
            <span className="lang-vi">Làm tại Việt Nam · Với cả trái tim</span>
            <span className="lang-en">Made in Vietnam · with heart</span>
          </span>
        </div>
      </Container>
    </footer>
  )
}
