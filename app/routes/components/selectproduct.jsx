import MultiSelectDrop from './multiselectdrop';

export default function SelectProduct({products}) {
 const productsOptions = products.map((value) => {
  const productHtml = <div className='productcards'>
    <img className='prodIm' src={value?.featuredMedia?.preview?.image?.url} alt={value.title} width={100} height={100} />
    <p className='productTitle'>{value.title}</p>
    <p className='productPrice'></p>
  </div>
  return {value: value.id, label:productHtml, searchField: value.title }
 });
 console.log(productsOptions);
  return(
    <>
    select product
    <MultiSelectDrop propoptions={productsOptions} propplaceholder={'select Prouct'}/>
    </>
  )
};
