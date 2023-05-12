import Card from "./Card";

const Container = ({cards}) => {

    if (!cards) {
        return <div>Loading...</div>
      }

    return (
        <div className="justify-center flex flex-row flex-wrap">
        { cards.map((card) => (
          <Card card={card}/>
        ))
        }
        </div>
    )

}

export default Container
