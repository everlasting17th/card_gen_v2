import { useMantineColorScheme } from "@mantine/core"
import { useEffect } from "react";

function App() {

  const { setColorScheme } = useMantineColorScheme();

  useEffect(() => {
    setColorScheme('dark')
  });

  return (
    <>
      Hello, world
    </>
  )
}

export default App
