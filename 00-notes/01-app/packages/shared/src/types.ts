// --- Sketch ---

export interface Sketch {
  id: string;
  filename: string;
  mimeType: 'image/jpeg' | 'image/png';
  uploadedAt: string;
}

// --- Sketch Analysis ---

export interface SketchElement {
  type: 'rectangle' | 'circle' | 'line' | 'text' | 'arrow' | 'image' | 'unknown';
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  confidence: number;
}

export interface SketchAnalysis {
  sketchId: string;
  elements: SketchElement[];
  hierarchy: HierarchyNode;
  groups: ElementGroup[];
  intentPatterns: IntentPattern[];
  overallConfidence: number;
}

export interface HierarchyNode {
  elementIndex: number;
  importance: number;
  children: HierarchyNode[];
}

export interface ElementGroup {
  name: string;
  elementIndices: number[];
  relationship: 'proximity' | 'alignment' | 'enclosure';
}

export interface IntentPattern {
  pattern: 'header' | 'nav-bar' | 'tab-bar' | 'list' | 'grid' | 'form' | 'modal' | 'card' | 'hero' | 'footer';
  elementIndices: number[];
  confidence: number;
}

// --- Layout Generation ---

export type LayoutStrategy = 'faithful' | 'grid' | 'editorial' | 'minimal' | 'dense';

export interface GenerationRequest {
  sketchId: string;
  strategies?: LayoutStrategy[];
}

export interface GenerationResult {
  sketchId: string;
  options: LayoutOption[];
  generatedAt: string;
}

export interface LayoutOption {
  strategy: LayoutStrategy;
  strategyLabel: string;
  confidence: number;
  annotations: string[];
  layout: LayoutNode;
}

// --- Layout Tree ---

export type LayoutNode = ContainerNode | ElementNode;

export interface ContainerNode {
  type: 'container';
  layout: 'flex-row' | 'flex-col' | 'grid';
  gap?: string;
  padding?: string;
  background?: string;
  borderRadius?: string;
  children: LayoutNode[];
  accessibility?: AccessibilityMeta;
}

export interface ElementNode {
  type: 'text' | 'heading' | 'image' | 'button' | 'input' | 'divider' | 'icon' | 'avatar' | 'badge' | 'card';
  content?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  src?: string;
  placeholder?: string;
  variant?: string;
  width?: string;
  height?: string;
  color?: string;
  background?: string;
  fontSize?: string;
  fontWeight?: string;
  borderRadius?: string;
  accessibility?: AccessibilityMeta;
}

export interface AccessibilityMeta {
  role?: string;
  label?: string;
  focusOrder?: number;
}

// --- Design Tokens ---

export interface DesignTokens {
  colors: Record<string, string>;
  typography: Record<string, TypographyToken>;
  spacing: Record<string, string>;
  'border-radius': Record<string, string>;
}

export interface TypographyToken {
  family: string;
  weight: number;
  size: string;
  'line-height': number;
}

// --- API Responses ---

export interface ApiError {
  error: string;
  message: string;
}

// --- SSE Events ---

export interface GenerationProgressEvent {
  type: 'strategy-started' | 'strategy-completed' | 'strategy-failed' | 'all-complete';
  strategy?: LayoutStrategy;
  option?: LayoutOption;
  error?: string;
  completedCount: number;
  totalCount: number;
}
