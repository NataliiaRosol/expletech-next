import CategoryFilter from "./components/CategoryFilter";
import PriceFilter from "./components/PriceFilter";
import ProductListPage from "./components/ProductListPage";
import Search from "./components/Search";


export default function Home() {
  
  return (
    <main className="max-w-[1200px] mx-auto">
      <h1 className="text-center text-2xl font-bold text-blue-950 p-5 md:p-10">Product list page</h1>
      <Search />
      <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3">
        <CategoryFilter />
        <PriceFilter />
      </div>
      
      <ProductListPage />
    </main>
    
  );
}
