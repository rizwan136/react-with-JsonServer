const AddNewProducts = () => {
  return (
    <>
      <div></div>
      <form className="shadow m-24  p-5 grid grid-cols-2 gap-4">
        <div className=" flex gap-5">
          <label className="px-3 py-2 ">Name</label>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-80 px-3 py-2 border border-gray-300
                   placeholder-gray-500 text-gray-900 
                   focus:outline-none focus:ring-black
                   focus:border-black focus:z-10"
            placeholder="Email address"
          />
        </div>
        <div className="flex gap-5">
          <label className="px-3 py-2">Category</label>
          <select
            name="category"
            required
            className="w-80 px-3 py-2 border border-gray-300
               placeholder-gray-500 text-gray-900 
               focus:outline-none focus:ring-black
               focus:border-black focus:z-10"
          >
            <option value="" disabled selected>
              Select a category
            </option>
            <option value="electronics" className="hover:bg-black">
              Electronics
            </option>
            <option value="grocery">Grocery</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default AddNewProducts;
