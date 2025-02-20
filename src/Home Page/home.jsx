import React from "react";
import food1 from '../assets/food 1.png'
import page1 from '../assets/page-1.png'
import pet_bowl from '../assets/pet-bowl 1.png'
import vector from '../assets/Vector.png'
import payments from '../assets/payments.png'
import rectangle15 from '../assets/Rectangle 15.png'
import rectangle8 from '../assets/Rectangle 8.png'
import rectangle7 from '../assets/Rectangle 7.png'
import frame from '../assets/Frame.png'
import checker from '../assets/shield-check.png'


export const Home = () =>{
    return(
        <div className="w-[1,920px] h-[2,741px] font-sans">
            {/* section 1 starts */}
            <div className="w-full bg-[#FFFFFF] h-[810px] py-20 px-14">
                <h1 className="w-[536px] mx-auto h-[96px] font-[600] text-[40px] text-center text-[#161723]">What makes us different makes them stronger</h1>
                <div className="w-[1,170px] mx-auto h-[370px] grid grid-cols-3 my-[48px] gap-[30px]">
                    <div className="w-[370px] h-[250px] space-y-[80px]">
                        <div className="w-full h-[85px] gap-[24px] flex">
                            <div className="w-[60px] h-[60px] flex items-center rounded-[50px] bg-[#DCF9CA]"><img  src={food1} alt="food-1" className="w-9 mx-auto h-9 text-[#424153] top-12 left-3 object-contain"/></div>
                            <div className="w-[286px] h-[85px] space-y-[8px]">
                                <h2 className="w-[90px] h-[29px] text-[#161723] text-[19px] font-[600]">Real Food</h2>
                                <p className="w-full h-[48px] text-[16px] font-[400px] text-[#424153]">Wholesome recipes for dogs with real meat and veggies.</p>
                            </div>
                        </div>
                        <div>
                        <div className="w-full h-[85px] gap-[24px] flex">
                            <div className="w-[60px] h-[60px] flex items-center rounded-[60px] bg-[#F8F0D6]"><img src={pet_bowl} alt="pet-bowl" className="w-[38px] mx-auto h-[35.39px] top-[12.3px] left-[11px] text-[#424153] object-cover" /></div>
                            <div className="w-[286px] h-[85px] space-y-[8px]">
                                <h2 className="w-[190px] h-[29px] text-[#161723] text-[19px] font-[600]">Premium Ingredient</h2>
                                <p className="w-full h-[48px] text-[16px] font-[400px] text-[#424153]">Elevating pet care with unmatched safety and quality.</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="w-[370px] h-full">
                        <img src={frame} alt="frame" className="w-full h-full object-contain"/>
                    </div>

                    <div className="w-full h-[250px] space-y-[80px]">
                        <div className="w-full h-[85px] gap-[24px] flex">
                            <div className="w-[60px] h-[60px] flex items-center rounded-[50px] bg-[#C8F2E7]"><img  src={vector} alt="vector" className="w-[35.73px] mx-auto h-9 text-[#424153] top-12 left-[12.13px] object-cover"/></div>
                            <div className="w-[295px] h-fit space-y-[8px]">
                                <h2 className="w-[105px] h-[29px] text-[#161723] text-[19px] font-[600]">Made Fresh</h2>
                                <p className="w-full h-fit text-[16px] font-[400px] text-[#424153]">We prioritize maintaining the integrity of whole foods and nutrition.</p>
                            </div>
                        </div>

                        <div className="w-full h-[85px] gap-[24px] flex">
                            <div className="w-[60px] h-[60px] flex items-center rounded-[50px] bg-[#F7CABD]"><img src={page1} alt="page-1" className="w-[35.99px] mx-auto h-12 top-3 left-3 text-[#424153] object-cover" /></div>
                            <div className="w-[286px] h-[85px] space-y-[8px]">
                                <h2 className="w-fit h-[29px] text-[#161723] text-[19px] font-[600]">Vet Developed</h2>
                                <p className="w-full h-[48px] text-[16px] font-[400px] text-[#424153]">We raise the bar for dog nutrition, surpassing industry expectations.</p>
                            </div>
                        </div>
  
                    </div>
                    
                </div>

                <div className="w-[462px] mx-auto h-[88px] space-y-4">
                    <div className="cursor-pointer w-full h-12 rounded-[6px] py-3 px-10 bg-[#EE6F4B] gap-[10px]">
                        <p className="w-[278px] mx-auto h-6 text-[#FFFFFF] text-[16px] font-[600]">Get your dog's healthy meal today!</p>
                    </div>

                    <div className="w-full h-6 gap-6 grid grid-cols-2">
                        <div className="w-fit h-5 gap-2 flex">
                            <div className="w-4 h-4 left-[1px]"><img src={checker} alt="checker" className="w-3.5 h-4 text-[#424153] left-[1px] object-contain" /></div>
                            <div className="w-fit h-5">
                                <p style={{lineHeight:"19px", letterSpacing:'0.5px'}} className="font-[400] text-[13px] text-[#424153]">30-day money back guarantee</p>
                            </div>
                        </div>
                        <div className="w-fit h-6 space-x-2 gap-2 flex">
                            <div className="w-[39.2] h-6"><img src={payments} alt="payments" className="object-cover" /></div>                   

                        </div>
                    </div>
                </div>
            </div>
            {/* section 1 ends */}

            {/* section 2 starts */}
            <div className="w-full h-[731px] py-20 bg-[#F8F8F8] grid grid-cols-2 gap-[30px] px-14">
                <div className="w-full h-full pr-[32px] space-y-12">
                    <div className="w-full h-fit space-y-4">
                        <h1 className="w-full h-full font-[600] text-[40px] text-[#161723]">Nutrition is the foundation for longer, healthier lives in dogs.</h1>
                        <p className="w-full h-full text-[16px] font-[400] text-[#424153]">Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.</p>
                    </div>

                    <div className="w-full h-fit space-y-4">
                        <h2 className="w-full h-fit text-[#161723] text-[19px] font-[600]">Key Points:</h2>
                        <div className="w-full h-full gap-3 space-y-3">
                            <div className="w-full h-full flex space-x-12">
                                <h3 style={{lineHeight:'49.5px', letterSpacing:'0.25px'}} className="w-[67px] h-fit font-[700] text-[33px] text-[#EE6F4B]">97%</h3>
                                <p className="w-full h-fit text-[16px] font-[400] text-[#424153]">Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.</p>
                            </div>
                            <div className="w-full h-full flex space-x-12">
                                <h3 style={{lineHeight:'49.5px', letterSpacing:'0.25px'}} className="w-[67px] h-fit font-[700] text-[33px] text-[#EE6F4B]">84%</h3>
                                <p className="w-full h-fit text-[16px] font-[400] text-[#424153]">Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.</p>
                            </div>
                            <div className="w-full h-full flex space-x-12">
                                <h3 style={{lineHeight:'49.5px', letterSpacing:'0.25px'}} className="w-[67px] h-fit font-[700] text-[33px] text-[#EE6F4B]">92%</h3>
                                <p className="w-full h-fit text-[16px] font-[400] text-[#424153]">Our dog food's high protein and fat digestibility contribute to ideal stool quality.</p>
                            </div>
                        </div>
                    </div>

                    <div className="cursor-pointer w-full h-fit rounded-[6px] bg-[#EE6F4B] py-3 px-10 gap-10">
                        <p className="text-[#FFFFFF] text-[16px] font-[600] text-center">Give your furry friend the gift of wholesome nutrition</p>
                    </div>
                    
                </div>

                <div className="w-full h-full rounded-[10px]">
                    <img src={rectangle15} alt="rectangle 15" className="w-full h-full object-contain" />
                </div>
                {/* section 2 ends */}
            </div>
            {/* section 3 starts */}
            <div className="w-full h-full py-20 space-y-[80px] px-14">
                <div className="w-full h-fit grid grid-cols-2 gap-[30px] items-center">
                    <div className="w-full h-[480px] rounded-[10px]">
                        <img src={rectangle8} alt="rectangle 8" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-fit pl-[32px] space-y-[16px]">
                        <h1 className="font-[600] text-[40px] text-[#161723]">Improve overall gastrointestinal health for better nutrient absorption</h1>
                        <p className="text-[16px] font-[400] text-[#424153]">Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.</p>
                    </div>
                </div>
                <div className="w-full h-fit grid grid-cols-2 gap-[30px] items-center">
                    <div className="w-full h-fit pr-[32px] space-y-[16px]">
                        <h1 className="font-[600] text-[40px] text-[#161723]">Prebiotics nourish the beneficial gut bacteria, supporting digestive health</h1>
                        <p className="text-[16px] font-[400] text-[#424153]">Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.</p>
                    </div>

                    <div className="w-full h-[480px] rounded-[10px]">
                        <img src={rectangle7} alt="rectangle 7" className="w-full h-full object-cover" />
                    </div>                  
                    
                </div>
            </div>
            {/* section3 ends */}           
        </div>
    )
}