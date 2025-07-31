import "./globals.scss";

export const metadata = {
    title: "Martstick",
    description: "Ecommerce platform",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased" suppressHydrationWarning>
             
                            {children}
                     
            </body>
        </html>
    );
}
