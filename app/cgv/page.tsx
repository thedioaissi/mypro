export default function CGVPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Conditions Générales de Vente</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Objet</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Probooster, une branche de l'ONG Impact Horizon,
              et ses clients dans le cadre de la vente de formations et de produits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Formations</h2>
            <h3 className="text-xl font-semibold mb-3">2.1 Inscription</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-4">
              L'inscription à une formation se fait via le formulaire en ligne disponible sur le site. Elle devient
              définitive après validation par Probooster et réception du paiement.
            </p>
            <h3 className="text-xl font-semibold mb-3">2.2 Tarifs</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-4">
              Les tarifs des formations sont indiqués en francs CFA (XOF) et peuvent être modifiés à tout moment. Le
              tarif applicable est celui en vigueur au moment de l'inscription.
            </p>
            <h3 className="text-xl font-semibold mb-3">2.3 Modalités de paiement</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-4">
              Le paiement peut s'effectuer par virement bancaire, mobile money ou en espèces dans nos locaux. Un reçu
              sera délivré pour tout paiement effectué.
            </p>
            <h3 className="text-xl font-semibold mb-3">2.4 Annulation et remboursement</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Toute annulation doit être notifiée par écrit au moins 7 jours avant le début de la formation pour donner
              droit à un remboursement de 50%. Aucun remboursement ne sera effectué en cas d'annulation moins de 7 jours
              avant le début.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Produits</h2>
            <h3 className="text-xl font-semibold mb-3">3.1 Commande</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-4">
              Les produits présentés sur le site sont vendus sur demande. Pour commander, contactez-nous via le bouton
              "Contactez le vendeur" ou par email à contact@probooster.online.
            </p>
            <h3 className="text-xl font-semibold mb-3">3.2 Prix</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-4">
              Les prix sont communiqués sur demande et peuvent varier selon la disponibilité. Ils sont exprimés en
              francs CFA (XOF) toutes taxes comprises.
            </p>
            <h3 className="text-xl font-semibold mb-3">3.3 Livraison</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-4">
              Les modalités et frais de livraison sont communiqués lors de la commande. Les délais de livraison sont
              donnés à titre indicatif.
            </p>
            <h3 className="text-xl font-semibold mb-3">3.4 Garantie</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Sauf mention contraire, les produits sont garantis contre les vices cachés conformément au Code civil
              béninois. La garantie ne couvre pas l'usure normale ou les dommages résultant d'une mauvaise utilisation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Probooster s'engage à fournir des formations de qualité et des produits conformes. Toutefois, la
              responsabilité de Probooster ne saurait être engagée en cas de force majeure ou de fait indépendant de sa
              volonté.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Protection des données personnelles</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Les informations collectées sont nécessaires au traitement de votre commande ou inscription. Elles sont
              destinées à Probooster, une branche de l'ONG Impact Horizon, et ne seront en aucun cas cédées à des tiers. Vous disposez d'un droit d'accès, de
              rectification et de suppression de vos données.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Propriété intellectuelle</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Tous les contenus présents sur le site (textes, images, logos, supports de formation) sont la propriété de
              Probooster, une branche de l'ONG Impact Horizon, et protégés par le droit de la propriété intellectuelle. Toute reproduction est interdite sans
              autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Droit applicable et litiges</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Les présentes CGV sont régies par le droit béninois. En cas de litige, une solution amiable sera
              recherchée avant toute action judiciaire. À défaut, les tribunaux béninois seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Pour toute question concernant ces conditions générales de vente, vous pouvez nous contacter :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
              <li>Par téléphone : +229 51 65 16 78</li>
              <li>Par email : contact@probooster.online</li>
              <li>Adresse : Bénin</li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t text-sm text-muted-foreground">
            <p>Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
