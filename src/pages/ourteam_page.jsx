import React from 'react'
import Navbar1 from '../components/navbar1'
import '../stylesheet/ourteam.css'
import our_team_data from '../json/ourteam'
function Ourteam_page() {
  return (
    <div className='h-[200vh] overflow-hidden'>
      <Navbar1 />
      <div className='pt-[80px]'>
      <div className='pt-[30px]'>
    <div id='ourteam' className=' flex justify-center flex-col items-center  '>
      <div className='text-[28px] font-semibold'>Our Team</div>
        <section id="cards" className='py-[30px] w-[100%]'>
            <div class="container flex flex-col justify-center items-center w-[1200px]">
                    {
                      our_team_data.map((item)=>{
                        return item.position=='President'?<div class="col-lg-4 col-md-6 mb-[50px] mt-[50px]">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <div class="user-picture">
                                    <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                                </div><br /><br /><br />
                                <div class="user-content text-center">
                                    <h2 class="  text-[black] font-[40px] ">{item.name}</h2>
                                    <p class=" text-capitalize text-muted small">{item.position}</p>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>:""
                      })
                    }
                <div class="row gap-y-[1rem] justify-center  w-[1200px] ">
                    {
                      our_team_data.map((item)=>{
                        return item.position!='President'? <div class="col-lg-4 col-md-6 mb-[50px] mt-[50px]">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <div class="user-picture">
                                    <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                                </div><br /><br /><br />
                                <div class="user-content text-center">
                                    <h2 class="  text-[black] font-[40px] ">{item.name}</h2>
                                    <p class=" text-capitalize text-muted small">{item.position}</p>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>:""
                      })
                    }
                </div>
            </div>
        </section>
        
    </div>

    </div>
      </div>
    </div>
  )
}

export default Ourteam_page