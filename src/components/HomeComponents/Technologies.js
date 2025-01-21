import React, { useState } from "react";
import gpt from '../../utils/technologies/chatgpt.webp';
import langChain from '../../utils/technologies/langChain.webp';
import firebase from '../../utils/technologies/firebase.webp';
import llama from '../../utils/technologies/llama.webp';
import prompt from '../../utils/technologies/prompt.webp';

import nativeios from '../../utils/technologies/nativeios.webp';
import android from '../../utils/technologies/android.webp';
import vue from '../../utils/technologies/vue.webp';
import react from '../../utils/technologies/react.webp';
import nextjs from '../../utils/technologies/nextjs.webp';

import nodejs from '../../utils/technologies/nodejs.webp';
import postgersql from '../../utils/technologies/postgersql.webp';
import laravel from '../../utils/technologies/laravel.webp';
import spring from '../../utils/technologies/spring.webp';
import php from '../../utils/technologies/php.webp';

import hasura from '../../utils/technologies/hasura.webp';

import selenium from '../../utils/technologies/selenium.webp';
import manualtesting from '../../utils/technologies/manualtesting.webp';
import autotesting from '../../utils/technologies/autotesting.webp';

import figma from '../../utils/technologies/figma.webp';
import adobe from '../../utils/technologies/adobe.webp';

const Technologies=()=>{
    const [activeSection, setActiveSection] = useState('ai');

    const buttonClick=(e)=>{
        let value = e.target.textContent.toLowerCase(); // Ensure the value is in lowercase
        console.log(value);
        
        switch (value) {
            case 'qa':
              setActiveSection('qa');
              break;
            case 'ai':
              setActiveSection('ai');
              break;
            case 'frontend':
              setActiveSection('frontend');
              break;
            case 'backend':
              setActiveSection('backend');
              break;
            case 'databases':
              setActiveSection('databases');
              break;
            case 'design':
              setActiveSection('design');
              break;
            default:
              setActiveSection(''); // Hide all sections if no match
          }
        
    
    }
    return(
        <div className="font-roboto px-5 md:px-[85px] flex flex-col bg-gray-100 py-5 md:py-10 mb-5">
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 tracking-wide leading-tight md:leading-snug mb-6 relative">
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 rounded"></span>
                    Technologies
                </h1>
                <p className="text-black-250 text-base md:text-lg font-normal tracking-wide	 md:pb-8">Our development and design teams bring the best blend of industry experience and update knowledge to the table. Focus on finding solutions for your business needs while we handle the technical aspect, end-to-end.</p>
            </div>

            <div className="w-full flex flex-col ">
                
                <div className="flex justify-between gap-2 md:gap-0 px-7 py-2 w-full mb-3">
                    <button onClick={(e) => buttonClick(e)} className={`w-1/5 text-base md:text-xl py-3 border-b-2 ${activeSection === 'ai' ? 'border-red-500' : ''}`}>AI</button>
                    <button onClick={(e) => buttonClick(e)} className={`w-1/5 text-base md:text-xl py-3 border-b-2 ${activeSection === 'frontend' ? 'border-red-500' : ''}`}>Frontend</button>
                    <button onClick={(e) => buttonClick(e)} className={`w-1/5 text-base md:text-xl py-3 border-b-2 ${activeSection === 'backend' ? 'border-red-500' : ''}`}>Backend</button>
                    <button onClick={(e) => buttonClick(e)} className={`w-1/5 text-base md:text-xl py-3 border-b-2 ${activeSection === 'databases' ? 'border-red-500' : ''}`}>Databases</button>
                    <button onClick={(e) => buttonClick(e)} className={`w-1/5 text-base md:text-xl py-3 border-b-2 ${activeSection === 'qa' ? 'border-red-500' : ''}`}>QA</button>
                    <button onClick={(e) => buttonClick(e)} className={`w-1/5 text-base md:text-xl py-3 border-b-2 ${activeSection === 'design' ? 'border-red-500' : ''}`}>design</button>
                </div>

                <div className=" flex items-center " id='content' >
                    {activeSection==='ai' && (
                         <div className="flex justify-center md:justify-start gap-10 flex-wrap" id="ai">
                            <div className="flex items-center justify-center flex-col gap-1 border-b">
                            <div className="flex items-center justify-center bg-white rounded-md p-10">
                            <img src={gpt} alt="settings" className="w-14 h-14"/>
                            </div>
                            <span>GPT</span>
                            </div>
    
                            <div className="flex items-center justify-center flex-col gap-1">
                            <div className="flex items-center justify-center bg-white rounded-md p-10">
                            <img src={langChain} alt="settings" className="w-12 h-12"/>
                            </div>
                            <span>Lang Chain</span>
                            </div>
    
                            <div className="flex items-center justify-center flex-col gap-1">
                            <div className="flex items-center justify-center bg-white rounded-md p-10">
                            <img src={llama} alt="settings" className="w-14 h-14"/>
                            </div>
                            <span>Llama Index</span>
                            </div>
    
                            <div className="flex items-center justify-center flex-col gap-1">
                            <div className="flex items-center justify-center bg-white rounded-md p-10">
                            <img src={prompt} alt="settings" className="w-14 h-14"/>
                            </div>
                            <span>Prompt Engineering</span>
                            </div>
    
                            <div className="flex items-center justify-center flex-col gap-1">
                            <div className="flex items-center justify-center bg-white rounded-md p-10">
                            <img src={firebase} alt="settings" className="w-14 h-14"/>
                            </div>
                            <span>Firebase Genkit</span>
                            </div>
                         </div>
                    )}
                   
                   {activeSection==='frontend' && (
                      <div className="flex gap-10 justify-center md:justify-start flex-wrap" id="frontend">
                        <div className="flex items-center justify-center flex-col gap-1">
                        <div className="flex items-center justify-center bg-white rounded-md p-10">
                            <img src={react} alt="settings" className="w-14 h-14"/>
                        </div>
                        <span>React Native</span>
                        </div>

                        <div className="flex items-center justify-center flex-col gap-1">
                        <div className="flex items-center justify-center bg-white rounded-md p-10">
                            <img src={react} alt="settings" className="w-12 h-12"/>
                        </div>
                        <span>React Native</span>
                        </div>

                        <div className="flex items-center justify-center flex-col gap-1">
                        <div className="flex items-center justify-center bg-white rounded-md p-10">
                            <img src={nextjs} alt="settings" className="w-14 h-14"/>
                        </div>
                        <span>Next.js</span>
                        </div>

                        <div className="flex items-center justify-center flex-col gap-1">
                        <div className="flex items-center justify-center bg-white rounded-md p-10">
                            <img src={vue} alt="settings" className="w-14 h-14"/>
                        </div>
                        <span>Vue.js</span>
                        </div>

                        <div className="flex items-center justify-center flex-col gap-1">
                        <div className="flex items-center justify-center bg-white rounded-md p-10">
                            <img src={android} alt="settings" className="w-14 h-14"/>
                        </div>
                        <span>Android</span>
                        </div>

                        <div className="flex items-center justify-center flex-col gap-1">
                        <div className="flex items-center justify-center bg-white rounded-md p-10">
                            <img src={nativeios} alt="settings" className="w-14 h-14"/>
                        </div>
                        <span>Native iOS</span>
                        </div>
                      </div>
                   )}
                  

                    {activeSection==='backend' && (
                         <div className="flex gap-10 justify-center md:justify-start flex-wrap" id="backend">
                         <div className="flex items-center justify-center flex-col gap-1">
                          <div className="flex items-center justify-center bg-white rounded-md p-10">
                           <img src={nodejs} alt="settings" className="w-14 h-14"/>
                          </div>
                          <span>Node.js</span>
                         </div>
 
                         <div className="flex items-center justify-center flex-col gap-1">
                          <div className="flex items-center justify-center bg-white rounded-md p-10">
                           <img src={php} alt="settings" className="w-12 h-12"/>
                          </div>
                          <span>PHP</span>
                         </div>
 
                         <div className="flex items-center justify-center flex-col gap-1">
                          <div className="flex items-center justify-center bg-white rounded-md p-10">
                           <img src={spring} alt="settings" className="w-14 h-14"/>
                          </div>
                          <span>SPring Boot Index</span>
                         </div>
 
                         <div className="flex items-center justify-center flex-col gap-1">
                          <div className="flex items-center justify-center bg-white rounded-md p-10">
                           <img src={laravel} alt="settings" className="w-14 h-14"/>
                          </div>
                          <span>Laravel</span>
                         </div>
 
                         <div className="flex items-center justify-center flex-col gap-1">
                          <div className="flex items-center justify-center bg-white rounded-md p-10">
                           <img src={postgersql} alt="settings" className="w-14 h-14"/>
                          </div>
                          <span>GraphQL</span>
                         </div>
                     </div>
                    )}
                   

                    {activeSection==='databases' && (
                        <div className="flex gap-10 justify-center md:justify-start flex-wrap" id="databases">

                        <div className="flex items-center justify-center flex-col gap-1">
                         <div className="flex items-center justify-center bg-white rounded-md p-10">
                          <img src={postgersql} alt="settings" className="w-14 h-14"/>
                         </div>
                         <span>PostgresSQL</span>
                        </div>
  

                        <div className="flex items-center justify-center flex-col gap-1">
                         <div className="flex items-center justify-center bg-white rounded-md p-10">
                          <img src={hasura} alt="settings" className="w-14 h-14"/>
                         </div>
                         <span>Hasura</span>
                        </div>

                       
                    </div>
                    )}
                    

                    {activeSection==='qa' && (
                          <div className="flex gap-10 justify-center md:justify-start flex-wrap" id="qa">
                          <div className="flex items-center justify-center flex-col gap-1">
                           <div className="flex items-center justify-center bg-white rounded-md p-10">
                            <img src={selenium} alt="settings" className="w-14 h-14"/>
                           </div>
                           <span>Selenium</span>
                          </div>
  
                          <div className="flex items-center justify-center flex-col gap-1">
                           <div className="flex items-center justify-center bg-white rounded-md p-10">
                            <img src={manualtesting} alt="settings" className="w-12 h-12"/>
                           </div>
                           <span>Manual Testing</span>
                          </div>
  
  
                          <div className="flex items-center justify-center flex-col gap-1">
                           <div className="flex items-center justify-center bg-white rounded-md p-10">
                            <img src={autotesting} alt="settings" className="w-14 h-14"/>
                           </div>
                           <span>Auto Testing</span>
                          </div>
                      </div>
                    )}
                  

                    {activeSection==='design' && (
                         <div className="flex gap-10 justify-center md:justify-start flex-wrap" id="design">
                            <div className="flex items-center justify-center flex-col gap-1">
                            <div className="flex items-center justify-center bg-white rounded-md p-10">
                            <img src={figma} alt="settings" className="w-14 h-14"/>
                            </div>
                            <span>Figma</span>
                            </div>
    
                            <div className="flex items-center justify-center flex-col gap-1">
                            <div className="flex items-center justify-center bg-white rounded-md p-10">
                            <img src={adobe} alt="settings" className="w-14 h-14"/>
                            </div>
                            <span>Adobe Illustrator</span>
                            </div>
                         </div>
                    )}  
                    
                </div>
            </div>
        </div>
    )
}

export default Technologies;