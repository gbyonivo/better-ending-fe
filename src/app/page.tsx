import { MovieSearch } from "@/components/movie/movie-search";
import { WeatherContainer } from "@/components/weather/weather-container";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const tabs = [
  { name: "Weather", Component: WeatherContainer },
  { name: "Movies", Component: MovieSearch },
];

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex justify-center gap-[32px] row-start-2 sm:items-start w-full">
        <TabGroup>
          <TabList className="flex gap-4">
            {tabs.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {tabs.map(({ name, Component }) => (
              <TabPanel key={name} className="rounded-xl  p-3">
                <Component />
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </main>
    </div>
  );
}
