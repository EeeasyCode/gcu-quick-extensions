import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import { createRoot } from 'react-dom/client';
import Newtab from '@/pages/newtab/newtab'
import '@/pages/newtab/index.css';


function init() {
  const appContainer = document.querySelector('.app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  const root = createRoot(appContainer);

  root.render(
    <ChakraProvider>
      <Newtab />
    </ChakraProvider>
    );
}

init();