import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="text-center">
                <h1 className="mb-4 text-4xl font-bold">404 - Not Found</h1>
                <p className="mb-8 text-lg">La page que vous cherchez n'existe pas.</p>
                <Link href="/" className="black-sqr-btn">
                    Retourner à la page d'accueil
                </Link>
            </div>
        </div>
    );
}
