import React from 'react'
import TopNav from './TopNav'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Settings = (props) => {
    const { children, value, index, ...other } = props;
   
  return (
<div className=' font-sans bg-[#282828]  w-full'>
    <TopNav/>
 <div className='h-[calc(100vh-74px)]  overflow-auto text-white p-5'> 
   <div>
     <div class="text-4xl font-semibold pb-12">
            <h1 class="mb-8">Settings</h1>   
         <div class="flex justify-around items-center rounded-md p-2 w-5/6 border text-lg">
            <div class="p-2 rounded-md hover:bg-[#d5e0eb] hover:text-[#1976D2] hover:cursor-pointer">
                <p>My details</p>
            </div>
            <div class="p-2 rounded-md hover:bg-[#d5e0eb] hover:text-[#1976D2] hover:cursor-pointer">
                <p>Profile</p>
            </div>
            <div class="p-2 rounded-md hover:bg-[#d5e0eb] hover:text-[#1976D2] hover:cursor-pointer">
                <p>Password</p>
            </div>
            <div class="p-2 rounded-md hover:bg-[#d5e0eb] hover:text-[#1976D2] hover:cursor-pointer">
                <p>Team</p>
            </div>
            <div class="p-2 rounded-md hover:bg-[#d5e0eb] hover:text-[#1976D2] hover:cursor-pointer">
                <p>Plan</p>
            </div>
            <div class="p-2 rounded-md hover:bg-[#d5e0eb] hover:text-[#1976D2] hover:cursor-pointer">
                <p>Billing</p>
            </div>
            <div class="p-2 rounded-md hover:bg-[#d5e0eb] hover:text-[#1976D2] hover:cursor-pointer">
                <p>Email</p>
            </div>
            <div class="p-2 rounded-md hover:bg-[#d5e0eb] hover:text-[#1976D2] hover:cursor-pointer">
                <p>Notifications</p>
            </div>
            <div class="p-2 rounded-md hover:bg-[#d5e0eb] hover:text-[#1976D2] hover:cursor-pointer">
                <p>Integrations</p>
            </div>
            <div class="p-2 rounded-md hover:bg-[#d5e0eb] hover:text-[#1976D2] hover:cursor-pointer">
                <p>API</p>
            </div>
         </div>
     </div> 
     
    <div class="mb-5">
       <h2 class="font-semibold text-xl pb-1">Notification settings</h2>
       <p class="text-md">We may still send you important notifications about your account outside of your notification setttings.</p>
    </div>
    
    <hr/>
           
    <div class="my-5">
      <div class="flex justify-start gap-10">
          <div class="flex flex-col pr-14">
              <h2 class="font-medium">Comments</h2>
              <div class="text-md">
                <p>These are the notificatons when comments on</p>
                <p>your posts and replies to your comments.</p>
              </div>
          </div>
          <div class="flex flex-col">
             <div class="flex my-2">
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox"class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#1976D2]"></div>
                <span class="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">Push</span>
                </label>
             </div>
             <div class="flex my-2">
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox"class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#1976D2]"></div>
                <span class="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">Email</span>
                </label>
             </div>
             <div class="flex my-2">
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox"class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#1976D2]"></div>
                <span class="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">SMS</span>
                </label>
             </div>
          </div>        
      </div>
    </div>

    <hr />

    <div class="my-5">
      <div class="flex justify-start gap-12">
          <div class="flex flex-col pr-14">
              <h2 class="font-medium">Tags</h2>
              <div class="text-md">
                <p>These are the notificatons for when someone</p>
                <p>tags you in a comment, post or story.</p>
              </div>
          </div>
          <div class="flex flex-col">
             <div class="flex my-2">
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox"class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#1976D2]"></div>
                <span class="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">Push</span>
                </label>
             </div>
             <div class="flex my-2">
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox"class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#1976D2]"></div>
                <span class="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">Email</span>
                </label>
             </div>
             <div class="flex my-2">
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox"class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#1976D2]"></div>
                <span class="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">SMS</span>
                </label>
             </div>
          </div>        
      </div>
    </div>
 
    <hr />

    <div class="my-5">
      <div class="flex justify-start gap-14">
          <div class="flex flex-col pr-14">
              <h2 class="font-medium">Reminders</h2>
              <div class="text-md">
                <p>These are the notificatons to remind you of</p>
                <p>updates you might have missed.</p>
              </div>
          </div>
          <div class="flex flex-col">
             <div class="flex my-2 pl-1.5">
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox"class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#1976D2]"></div>
                <span class="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">Push</span>
                </label>
             </div>
             <div class="flex my-2 pl-1.5">
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox"class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#1976D2]"></div>
                <span class="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">Email</span>
                </label>
             </div>
             <div class="flex my-2 pl-1.5">
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox"class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#1976D2]"></div>
                <span class="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">SMS</span>
                </label>
             </div>
          </div>        
      </div>
    </div>

    <hr />

    <div class="my-5">
      <div class="flex justify-start gap-14">
          <div class="flex flex-col pr-14">
              <h2 class="font-medium">More activity about you</h2>
              <div class="text-md">
                    <p>These are the notificatons for posts on your</p>
                    <p>profile, likes and other ractions to your</p>
                    <p>posts, and more</p>
              </div>
          </div>
          <div class="flex flex-col">
             <div class="flex my-2 pl-1.5">
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox"class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#1976D2]"></div>
                <span class="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">Push</span>
                </label>
             </div>
             <div class="flex my-2 pl-1.5">
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox"class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#1976D2]"></div>
                <span class="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">Email</span>
                </label>
             </div>
             <div class="flex my-2 pl-1.5">
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox"class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#1976D2]"></div>
                <span class="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">SMS</span>
                </label>
             </div>
          </div>        
      </div>
    </div>

   </div>
 </div>
</div>

  )
}

export default Settings