import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const categories = [
  { name: "Ending", posts: [] },
  { name: "Poem", posts: [] },
];

export const MovieEndingOrPoem = () => {
  return (
    <TabGroup>
      <TabList className="flex gap-4">
        {categories.map(({ name }) => (
          <Tab
            key={name}
            className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
          >
            {name}
          </Tab>
        ))}
      </TabList>
      <TabPanels className="mt-3">
        {categories.map(({ name }) => (
          <TabPanel key={name} className="rounded-xl bg-white/5 p-3 h-96">
            {name}
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};
