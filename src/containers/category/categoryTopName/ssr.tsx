import CategoryNameComponent from "@/components/category/categoryName/csr";

type Data = {
    categoryParm: string;
}

export default function CategoryName({ categoryParm }: Data) {

    return (
        <section className='w-full h-[150px] bg-yellow-300 p-[35px]'>
            <CategoryNameComponent categoryParma={categoryParm} />
        </section>
    );

}