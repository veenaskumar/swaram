import React from 'react'
import '../stylesheet/ourteam.css';
import Zoom from 'react-reveal/Zoom'
import {Link} from 'react-router-dom'
function Ourteam() {
  return (
    <div className='pt-[30px]'>
    <div id='ourteam' className='h-[130vh]  bg-black flex justify-center flex-col items-center '>
      <div className='text-[28px] font-semibold'>Our Team</div>
        <section id="cards" className='py-[30px]'>
            <div class="container">
                <div class="row gap-y-[2rem] ">
                    <div class="col-lg-4 col-md-6 mb-[50px] mt-[50px] md:w-[100px] md:border lg:border-none">
                        <div class="card shadow-sm border-0">
                            <div class="card-body">
                                <div class="user-picture">
                                    <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                                </div><br /><br /><br />
                                <div class="user-content text-center">
                                    <h2 class="  text-[black] font-[40px] ">Carry Johnshon</h2>
                                    <p class=" text-capitalize text-muted small">Web developer</p>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-[50px] mt-[50px]">
                        <div class="card shadow-sm border-0">
                            <div class="card-body">
                                <div class="user-picture">
                                    <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                                </div><br /><br /><br />
                                <div class="user-content text-center">
                                    <h2 class="  text-[black] font-[40px] ">Carry Johnshon</h2>
                                    <p class=" text-capitalize text-muted small">Web developer</p>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-[50px] mt-[50px]">
                        <div class="card shadow-sm border-0">
                            <div class="card-body">
                                <div class="user-picture">
                                    <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                                </div><br /><br /><br />
                                <div class="user-content text-center">
                                    <h2 class="  text-[black] font-[40px] ">Carry Johnshon</h2>
                                    <p class=" text-capitalize text-muted small">Web developer</p>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-[50px] mt-[50px]">
                        <div class="card shadow-sm border-0">
                            <div class="card-body">
                                <div class="user-picture">
                                    <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                                </div><br /><br /><br />
                                <div class="user-content text-center">
                                    <h2 class="  text-[black] font-[40px] ">Carry Johnshon</h2>
                                    <p class=" text-capitalize text-muted small">Web developer</p>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-[50px] mt-[50px]">
                        <div class="card shadow-sm border-0">
                            <div class="card-body">
                                <div class="user-picture">
                                    <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                                </div><br /><br /><br />
                                <div class="user-content text-center">
                                    <h2 class="  text-[black] font-[40px] ">Carry Johnshon</h2>
                                    <p class=" text-capitalize text-muted small">Web developer</p>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-[50px] mt-[50px]">
                        <div class="card shadow-sm border-0">
                            <div class="card-body">
                                <div class="user-picture">
                                    <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                                </div><br /><br /><br />
                                <div class="user-content text-center">
                                    <h2 class="  text-[black] font-[40px] ">Carry Johnshon</h2>
                                    <p class=" text-capitalize text-muted small">Web developer</p>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Zoom duration={500} delay={200} className='pt-[-50px]'><button className='bg-[red] w-[120px] text-center py-[10px] rounded-2xl hover:font-semibold'>
           <Link to='/ourteam' className='decoration-0 text-white hover:no-underline'>Read More</Link> 
            </button></Zoom>
    </div>

    </div>
  )
}

export default Ourteam