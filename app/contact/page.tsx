import ContactForm from "@/app/components/ContactForm";
export const metadata = {
    title : "Contact Us",
}

export default function ContactPage(){
    return(
        <section className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <ContactForm />
        </section>
    )
}