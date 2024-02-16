import React from 'react'
import Navbar1 from '../components/navbar'
import '../stylesheet/ourteam.css'
import our_team_data from '../json/ourteam'
import Contact from '../components/contact'
import '../stylesheet/gal.css'
function Ourteam_page() {
  return (
    <>
    <Navbar1 />
      <div className=' ' id='gallary_page_background'>
        <div className='pt-[80px]'>
          <div className='pt-[30px]'>
            <div id='ourteam' className=' flex justify-center flex-col items-center  '>
              <div className='text-[28px] font-semibold'>Our <span className='text-[red]'>Team</span></div>
              <section id="cards" className='py-[20px] w-[100%]'>
                <div class="container flex flex-col justify-center items-center w-[1200px] gap-0 ">
                  {
                    our_team_data.map((item) => {
                      return item.position == 'President' ? <div class="col-lg-4 col-md-6  mb-[30px] mt-[50px] ">
                        <div class="card shadow-sm border-none bg-transparent ">
                          <div class="card-body px-[40px] ">
                            <div class="user-picture ">
                              <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle " height="130" width="130" />
                            </div><br /><br /><br />
                            <div class="user-content text-center">
                              <h2 class="    text-[white] font-bold sm:text-[18px] ">{item.name}</h2>
                              <p class=" text-capitalize   font-semibold text-[#d2d2d2]">{item.position}</p>
                            </div>
                          </div>
                        </div>
                      </div> : ""
                    })
                  }
                  <div class="row gap-y-[0rem] sm:gap-[0px] justify-center  w-[100%]  ">
                    {
                      our_team_data.map((item) => {
                        return item.position != 'President' && item.position!='Member' ?  <div class="col-lg-4 col-md-6  mb-[50px] mt-[50px] sm:px-[10%] sm:py-[5%] md:w-[100px] ">
                        <div class="card shadow-sm  bg-transparent  ">
                            <div class="card-body flex flex-col justify-center items-center  ">
                                <div class="user-picture  ">
                                    <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" className='   sm:left-10 sm:top-[-30px] sm:rounded-full rounded-full '/>
                                </div><br /><br /><br />
                                <div class="user-content text-center">
                                    <h2 class="  text-[white] font-bold sm:text-[14px] ">Carry Johnshon</h2>
                                    <p class=" text-capitalize font-semibold text-[#d2d2d2]">Web developer</p>
                                </div>
                            </div>
                        </div>
                    </div>:""
                      })
                    }
                  </div>
                </div>
              </section>
              <section id="cards" className='py-[10px] w-[100%] flex flex-col gap-[4rem] justify-center items-center'>
              <div className='text-[28px] font-semibold text-center'>Backstage <span className='text-[red]'>Bees</span></div>
              <div class="row gap-y-[0rem] sm:gap-[0px] justify-center  w-[100%]  ">
                    {
                      our_team_data.map((item) => {
                        return item.position != 'President' ?  <div class="col-lg-4 col-md-6  mb-[50px] mt-[50px] sm:px-[10%] sm:py-[5%] md:w-[100px] ">
                        <div class="card shadow-sm  bg-transparent  ">
                            <div class="card-body flex flex-col justify-center items-center  ">
                                <div class="user-picture  ">
                                    <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" className='   sm:left-10 sm:top-[-30px] sm:rounded-full rounded-full '/>
                                </div><br /><br /><br />
                                <div class="user-content text-center">
                                    <h2 class="  text-[white] font-bold sm:text-[14px] ">Carry Johnshon</h2>
                                    <p class=" text-capitalize font-semibold text-[#d2d2d2]">Web developer</p>
                                </div>
                            </div>
                        </div>
                    </div>:""
                      })
                    }
                  </div>
              </section>

            </div>


          </div>
        </div>
      </div>
      <Contact />
    </>
  )
}

export default Ourteam_page