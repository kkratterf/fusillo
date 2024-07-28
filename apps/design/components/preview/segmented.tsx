// Import core
// Import customs
import Preview from "@components/preview/preview";
import { Segmented, SegmentedContent, SegmentedList, SegmentedTrigger } from "@fusillo/ui/components/segmented";
import { Grid, List } from "@fusillo/ui/components/icon";

export const SegmentedPreview = () => (
  <Preview>
    <Segmented defaultValue="grid">
      <SegmentedList>
        <SegmentedTrigger value="grid">Grid</SegmentedTrigger>
        <SegmentedTrigger value="list">List</SegmentedTrigger>
      </SegmentedList>
      <SegmentedContent value="grid" className="text-center">
        Grid view
      </SegmentedContent>
      <SegmentedContent value="list" className="text-center">
        List view
      </SegmentedContent>
    </Segmented>
  </Preview>
);

export const SegmentedDefaultValue = () => (
  <Preview>
    <Segmented defaultValue="list">
      <SegmentedList>
        <SegmentedTrigger value="grid">Grid</SegmentedTrigger>
        <SegmentedTrigger value="list">List</SegmentedTrigger>
      </SegmentedList>
      <SegmentedContent value="grid" className="text-center">
        Grid view
      </SegmentedContent>
      <SegmentedContent value="list" className="text-center">
        List view
      </SegmentedContent>
    </Segmented>
  </Preview>
);

export const SegmentedDisabled = () => (
  <Preview>
    <Segmented defaultValue="grid">
      <SegmentedList>
        <SegmentedTrigger value="grid">Grid</SegmentedTrigger>
        <SegmentedTrigger value="list" disabled>
          List
        </SegmentedTrigger>
      </SegmentedList>
      <SegmentedContent value="grid" className="text-center">
        Grid view
      </SegmentedContent>
      <SegmentedContent value="list" className="text-center">
        List view
      </SegmentedContent>
    </Segmented>
  </Preview>
);

export const SegmentedWithIcon = () => (
  <Preview>
    <Segmented defaultValue="grid">
      <SegmentedList>
        <SegmentedTrigger value="grid">
          <Grid />
        </SegmentedTrigger>
        <SegmentedTrigger value="list">
          <List />
        </SegmentedTrigger>
      </SegmentedList>
      <SegmentedContent value="grid" className="text-center">
        Grid view
      </SegmentedContent>
      <SegmentedContent value="list" className="text-center">
        List view
      </SegmentedContent>
    </Segmented>
  </Preview>
);
