import CategoryFilter from "./components/CategoryFilter";
import ProductListPage from "./components/ProductListPage";


export default function Home() {
  
  return (
    <main className="max-w-[1200px] mx-auto">
      <h1 className="text-center text-2xl font-bold text-blue-950 p-5 md:p-10">Product list page</h1>
      <div className="flex items-center justify-center">
        <CategoryFilter />
      </div>
      
      <ProductListPage />
    </main>
    
  );
}
