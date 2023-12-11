import Header from "components/Header"
import Side from "components/side"
import Cards from "components/cards"
import Api from "components/Api"

async function page() {
  
  
const data=await Api()
    const cardss = data.map(item => {
      return (
        <Cards
          key={item.id}
          {...item}
        />
      )
    })
  
  return (
  
    <div className="HB">
      { cardss}
</div>

      )
}

export default page