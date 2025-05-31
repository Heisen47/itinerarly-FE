"use client";

import { Drawer } from "vaul";

export default function Planner() {
  return (
    <Drawer.Root>
      <Drawer.Trigger>Open Drawer</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 h-fit fixed bottom-0 left-0 right-0 outline-none">
          <Drawer.Title>Title</Drawer.Title>
          <div className="p-4 bg-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            id unde alias laboriosam nostrum ipsam excepturi ipsa dolore? At
            enim animi suscipit aperiam provident quo assumenda eligendi
            laboriosam eveniet modi?
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
