"use client";

import { motion } from "motion/react";

import { Accordeon, AccordeonItem } from "@/components/accordeon";

const faq = [
  {
    q: "Quels modes de paiement acceptez-vous ?",
    r: "Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay et le paiement à la livraison pour certaines zones. Toutes les transactions sont sécurisées.",
  },
  {
    q: "Quels sont les délais de livraison ?",
    r: "La livraison standard prend 3 à 7 jours ouvrés. L'express est possible sous 24 à 48 heures. Nous livrons partout en France et dans plus de 30 pays.",
  },
  {
    q: "Puis-je retourner ou échanger un article ?",
    r: "Oui, vous avez 30 jours à compter de la réception pour retourner ou échanger votre hoodie. L'article doit être neuf, non porté et dans son emballage d'origine. Le remboursement est effectué sous 5 à 10 jours ouvrés.",
  },
  {
    q: "Comment choisir ma taille ?",
    r: "Consultez notre guide des tailles disponible sur chaque fiche produit. Si vous hésitez entre deux tailles, nous vous recommandons de choisir la plus grande pour un fit plus confortable.",
  },
  {
    q: "Proposez-vous des réductions pour les commandes en gros ?",
    r: "Oui, nous offrons des tarifs dégressifs à partir de 10 hoodies commandés. Contactez notre équipe commerciale via le formulaire de contact pour un devis personnalisé.",
  },
  {
    q: "Comment entretenir mon hoodie ?",
    r: "Lavez votre hoodie à l'envers en machine à 30°C maximum. Évitez le sèche-linge et le repassage direct sur les impressions. Suivez les instructions sur l'étiquette pour une durée de vie optimale.",
  },
];

export function FAQ() {
  return (
    <section className="px-6 py-32 text-white bg-black min-h-screen">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <span className="inline-flex px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 border border-zinc-800 rounded-full bg-zinc-900/50">
            FAQ
          </span>
          <h2 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-balance leading-none text-primary">
            Des questions&nbsp;?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-400 text-pretty">
            Retrouvez les réponses aux questions les plus fréquentes.
          </p>
        </motion.div>

        <Accordeon>
          {faq.map((item, index) => (
            <AccordeonItem key={index} title={item.q} defaultOpen={index === 0}>
              {item.r}
            </AccordeonItem>
          ))}
        </Accordeon>
      </div>
    </section>
  );
}
