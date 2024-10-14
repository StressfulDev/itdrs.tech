import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "Book a call": "Book a call",
            "We offer": "We offer",
            "full development cycle": "full development cycle",
            "from design to testing or we are ready to join your project at any stage": "from design to testing or we are ready to join your project at any stage",
            "Architecture":"Architecture",
            "Our team can provide you with a comprehensive software project architecture development service that will help you achieve your goals.": "Our team can provide you with a comprehensive software project architecture development service that will help you achieve your goals.",
            "Design": "Design",
            "Our team provides comprehensive web design services to create visually stunning, user-friendly websites that align with your business goals and target audience.": "Our team provides comprehensive web design services to create visually stunning, user-friendly websites that align with your business goals and target audience.",
            "Development": "Development",
            "Infrastructure": "Infrastructure",
            "We use VDS or cloud providers like AWS, Google Cloud, Yandex Cloud, and Selectel to develop our&nbsp;solutions.": "We use VDS or cloud providers like AWS, Google Cloud, Yandex Cloud, and Selectel to develop our&nbsp;solutions.",
            "Frontend": "Frontend",
            "We use the latest technologies like Vanilla JS, React, and&nbsp;Server-Side Rendering (SSR) to develop fast, responsive and&nbsp;dynamic frontend solutions.":"We use the latest technologies like Vanilla JS, React, and&nbsp;Server-Side Rendering (SSR) to develop fast, responsive and&nbsp;dynamic frontend solutions.",
            "Backend":"Backend",
            "Whether you need a monolithic or microservices architecture, our team can help you make the right choice for your project.":"Whether you need a monolithic or microservices architecture, our team can help you make the right choice for your project.",
            "Testing": "Testing",
            "Our team performs thorough testing to ensure that the product meets the requirements and works as expected.\n Don't let lack of in-house development expertise hold you back. Let us build your custom software today.": "Our team performs thorough testing to ensure that the product meets the requirements and works as expected.\\n Don\\'t let lack of in-house development expertise hold you back. Let us build your custom software today.",
            "Build my solution": "Build my solution",
            "You have a super 100% fantastic idea of a product you want, but do not know what you need to implement it? Should it be a standalone program or a cloud solution? We will listen to your need and offer your most suitable solution from which blocks it should be build.": "You have a super 100% fantastic idea of a product you want, but do not know what you need to implement it? Should it be a standalone program or a cloud solution? We will listen to your need and offer your most suitable solution from which blocks it should be build.",
            "Message us to get an architectural and product development advice.": "Message us to get an architectural and product development advice.",
            "You have several systems which need to exchange information and work together? We can investigate and offer options how to deal with it, including adapters, API bridges, etc.": "You have several systems which need to exchange information and work together? We can investigate and offer options how to deal with it, including adapters, API bridges, etc.",
            "Message us to get an integration advice.":"Message us to get an integration advice.",
            "You have a software your company works on, but the deadline is near and there is still much to be done? Lets see how the scope can be optimized and which resources you need to finish your tasks in time.": "You have a software your company works on, but the deadline is near and there is still much to be done? Lets see how the scope can be optimized and which resources you need to finish your tasks in time."
        }
    },
    sr: {
        translation: {
            "Book a call": "Zakažite poziv",
            "We offer": "Nudimo",
            "full development cycle": "pun razvojni ciklus",
            "from design to testing or we are ready to join your project at any stage": "od dizajna do testiranja ili smo spremni da se pridružimo vašem projektu u bilo kojoj fazi",
            "Architecture": "Arhitektura",
            "Our team can provide you with a comprehensive software project architecture development service that will help you achieve your goals.": "Naš tim vam može pružiti sveobuhvatnu softversku projektnu razvojnu uslugu koja će vam pomoći da postignete svoje ciljeve.",
            "Design": "Dizajn",
            "Our team provides comprehensive web design services to create visually stunning, user-friendly websites that align with your business goals and target audience.": "Naš tim pruža sveobuhvatne usluge web dizajna za kreiranje vizuelno zadivljujućih i prilagođenih korisniku web sajtove koji su u skladu sa vašim poslovnim ciljevima i ciljnim grupama.",
            "Development": "Razvoj",
            "Infrastructure": "Infrastruktura",
            "We use VDS or cloud providers like AWS, Google Cloud, Yandex Cloud, and Selectel to develop our&nbsp;solutions.": "Mi koristimo VDS ili cloud provajdere kao što su AWS, Google Cloud, Yandex Cloud i Selectel da razvijamo naša rešenja.",
            "Frontend": "Frontend",
            "We use the latest technologies like Vanilla JS, React, and&nbsp;Server-Side Rendering (SSR) to develop fast, responsive and&nbsp;dynamic frontend solutions.":"Koristimo najnovije tehnologije kao što su Vanilla JS, React i Server-Side Rendering (SSR) za razvoj brzih, odgovornih i dinamičnih frontend rešenja.",
            "Backend":"Backend",
            "Whether you need a monolithic or microservices architecture, our team can help you make the right choice for your project.":"Bilo da vam je potrebna monolitna ili mikroservisna arhitektura, naš tim vam može pomoći da napravite pravi izbor za vaš projekat.",
            "Testing": "Testiranje",
            "Our team performs thorough testing to ensure that the product meets the requirements and works as expected.\n Don't let lack of in-house development expertise hold you back. Let us build your custom software today.": "Naš tim vrši temeljno testiranje kako bi se uverio da proizvod ispunjava zahteve i da radi kako se očekuje. Ne dozvolite da nedostatak stručnosti iz in-house developmenta sputava. Dozvolitete nam da vam napravimo prilagođeni softver već danas.",
            "Build my solution": "Napravite moje rešenje",
            "You have a super 100% fantastic idea of a product you want, but do not know what you need to implement it? Should it be a standalone program or a cloud solution? We will listen to your need and offer your most suitable solution from which blocks it should be build.": "Imate super 100% fantastičnu ideju za proizvod koji želite ali ne znate šta vam je potrebno za implementaciju? Da li bi trebalo da bude samostalni program ili cloud rešenje? Saslušaćemo vaše potrebe i ponuditi vam najpogodnije rešenje od kojih blokova treba da bude izrađen.",
            "Message us to get an architectural and product development advice.": "Pošaljite nam poruku da dobijete savet za arhitekturu i razvoj proizvoda.",
            "You have several systems which need to exchange information and work together? We can investigate and offer options how to deal with it, including adapters, API bridges, etc.":"Imate nekoliko sistema koji treba da razmenjuju informacije i rade zajedno? Možemo da istražimo i ponudimo opcije kako da se reše, uključujući adapere, API mostove, itd.",
            "Integration": "Integracija",
            "Message us to get an intergration advice.":"Pošaljite nam poruku i dobićete savet za integraciju.",
            "You have a software your company works on, but the deadline is near and there is still much to be done? Lets see how the scope can be optimized and which resources you need to finish your tasks in time.": "Imate softver na kojem vaša kompanija radi ali rok je blizu i ima još mnogo toga da se uradi? Hajde da vidimo kako se obim posla može optimizovati i koji resursi su vam potrebni da bi ste svoje zadatke završili na vreme.",
            "Message us to get development advice.": "Pošaljite nam poruku da dobijete savet za razvoj.",
            "New technologies": "Nove tehnologije",
            "You have a running business and you see how you can get an edge over your competitors, but you need an instrument for it. We can help you get a leverage with new technology.": "Imate posao koji vodite i vidite kako možete da budete ispred konkurencije ali vam je potreban instrument za to. Možemo vam pomoći da steknete tu prednost uz pomoć  nove tehnologije.",
            "Message us to get competitive advantage with technological solutions.": "Pošaljite nam poruku da dobijete prednost u odnosu na konkurenciju sa tehnološkim rešenjima.",
            "Send": "Pošalji",
            "Message": "Poruka",
            "Thank you.": "Hvala puno!",
            "We shall contact you shortly! ITDRS team": "Kontaktiraćemo vas uskoro! ITDRS tim",
            "Contacts": "Kontakt",
            "Belgrade": "Beograd",
            "Cookie Policy": "Politika kolačića",
            "Contact us": "Kontaktirajte nas"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: 'en',
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
