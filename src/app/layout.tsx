import './globals.css';
export const metadata = {
  title: 'Xadrez - Gerenciamento de Jogadores',
  description: 'App para gerenciar jogadores de xadrez',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}