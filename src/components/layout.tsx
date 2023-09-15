import Footer from './footer';
import Navbar from './navbar';

type LayoutProps = {
    //prop children
    children: React.ReactNode,
};
export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            
            <Navbar/>
            <main className="grow">{children}</main>
            <Footer />
        </div>
    );
}