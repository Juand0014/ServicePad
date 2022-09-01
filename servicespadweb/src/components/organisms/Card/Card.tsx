import { Title } from "../../atoms";
import { CardContainer, Separator } from "../../atoms/CardsStyles/CardContainer"
import { Cards } from "../../molecules/Cards/Cards";

export const Card = () => {
 return (
	<CardContainer>
	<Cards content="ja;lsdjfa ;jdsf hjadsf" title={"hello world"} author={'Juan'} imgUrl={'https://picsum.photos/533/400?random=2'} />
	<Separator />
	<Cards content="ja;lsdjfa ;jdsf hjadsf" title={"hello world"} author={'Juan'} imgUrl={'https://picsum.photos/533/400?random=2'} />
	<Separator />
	<Cards content="ja;lsdjfa ;jdsf hjadsf" title={"hello world"} author={'Juan'} imgUrl={'https://picsum.photos/533/400?random=2'} />
	<Separator />
	<Cards content="ja;lsdjfa ;jdsf hjadsf" title={"hello world"} author={'Juan'} imgUrl={'https://picsum.photos/533/400?random=2'} />
	</CardContainer>
)}