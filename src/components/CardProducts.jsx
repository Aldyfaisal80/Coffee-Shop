import Image1 from '../../public/img/1.jpg'
import Image2 from '../../public/img/1.png'
import Image3 from '../../public/img/2.png'
import Image4 from '../../public/img/2.jpg'
import Badge from '../elemets/Badge'

import { FaShoppingBag } from "react-icons/fa";


export default function CardProducts() {
    return (
        <section className="pt-[20px]">
            <div className="flex w-full gap-4 font-poppins">
                <Badge>
                    <div>
                        <img className="rounded-[2vh] aspect-square" src={Image1} alt="" />
                    </div>
                    <Badge.Description title="Indonesia Beans" categorties="Coffee Beans" price="$235.000" icon={<FaShoppingBag className="text-black border border-black p-2 bg-[#e1cc97] rounded-[2vh]" />} />
                </Badge>
                <Badge>
                    <div>
                        <img className="rounded-[2vh] aspect-square" src={Image2} alt="" />
                    </div>
                    <Badge.Description title="Indonesia Beans" categorties="Coffee Beans" price="$235.000" icon={<FaShoppingBag className="text-black border border-black p-2 bg-[#e1cc97] rounded-[2vh]" />} />
                </Badge>
                <Badge>
                    <div>
                        <img className="rounded-[2vh] aspect-square" src={Image3} alt="" />
                    </div>
                    <Badge.Description title="Indonesia Beans" categorties="Coffee Beans" price="$235.000" icon={<FaShoppingBag className="text-black border border-black p-2 bg-[#e1cc97] rounded-[2vh]" />} />
                </Badge>
                <Badge>
                    <div>
                        <img className="rounded-[2vh] aspect-square" src={Image4} alt="" />
                    </div>
                    <Badge.Description title="Indonesia Beans" categorties="Coffee Beans" price="$235.000" icon={<FaShoppingBag className="text-black border border-black p-2 bg-[#e1cc97] rounded-[2vh]" />} />
                </Badge>
            </div>
        </section>
    )
}