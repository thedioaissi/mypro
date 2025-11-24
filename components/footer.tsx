import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="relative h-12 w-40">
              <Image src="/images/logo.png" alt="Probooster Logo" fill className="object-contain" />
            </div>
            <h3 className="text-lg font-bold text-white">Probooster</h3>
            <p className="text-sm text-gray-300">Formations professionnelles et catalogue de produits au Bénin</p>
            <p className="text-xs text-primary mt-1">Une branche de l'ONG Impact Horizon</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-gray-300 hover:text-primary transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/produits" className="text-gray-300 hover:text-primary transition-colors">
                  Produits
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cgv" className="text-gray-300 hover:text-primary transition-colors">
                  Conditions Générales de Vente
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-gray-300 hover:text-primary transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="text-gray-300 hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Bénin</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+22951651678" className="hover:text-primary transition-colors">
                  +229 51 65 16 78
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:contact@probooster.online" className="hover:text-primary transition-colors">
                  contact@probooster.online
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Probooster/Impact Horizon. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
