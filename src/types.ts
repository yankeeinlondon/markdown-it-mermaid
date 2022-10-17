export type MermaidTheme = "default" | "forest" | "dark" | "neutral";

export interface FlowChartConfig {
  /**
   * **diagramPadding** - amount of padding around the diagram as a whole
   * default: 8
   */
  diagramPadding?: number;

  /**
   * **htmlLabels** - Flag for setting whether or not a html tag should be used for rendering labels
   * on the edges
   * default: true
   */
  htmlLabels?: boolean;

  /**
   * **nodeSpacing** - Defines the spacing between nodes on the same level
   * default: 50
   */
  nodeSpacing?: number;

  /**
   * **rankSpacing** - Defines the spacing between nodes on different levels
   * default: 50
   */
  rankSpacing?: number;

  /**
   * default: 'monotoneX'
   */
  curve?: string;

  /**
   * **rankSpacing** - Only used in new experimental rendering, represents the padding between the labels and the shape
   * default: 15
   */
  padding?: number;

  /**
   * default: true
   */
  useMaxWidth?: boolean;
}

export interface SequenceDiagramConfig {
  /**
   * **diagramMarginX** - margin to the right and left of the sequence diagram
   * default: 50
   */
  diagramMarginX?: number;

  /**
   * **diagramMarginY** - margin to the over and under the sequence diagram
   * default: 10
   */
  diagramMarginY?: number;

  /**
   * **actorMargin** - Margin between actors
   * default: 10
   */
  actorMargin?: number;

  /**
   * **width** - Width of actor boxes
   * default: 150
   */
  width?: number;

  /**
   * **height** - Height of actor boxes
   * default: 65
   */
  height?: number;

  /**
   * **boxMargin** - Margin around loop boxes
   * default: 10
   */
  boxMargin?: number;

  /**
   * **boxTextMargin** - margin around the text in loop/alt/opt boxes
   * default: 5
   */
  boxTextMargin?: number;

  /**
   * **noteMargin** - margin around notes
   * default: 10
   */
  noteMargin?: number;

  /**
   * **messageMargin** - Space between messages
   * default: 35
   */
  messageMargin?: number;

  /**
   * **mirrorActors** - mirror actors under diagram
   * default: true
   */
  mirrorActors?: boolean;

  /**
   * **bottomMarginAdj** - Depending on css styling this might need adjustment.
   * Prolongs the edge of the diagram downwards
   * default: 1
   */
  bottomMarginAdj?: number;

  /**
   * **useMaxWidth** - when this flag is set the height and width is set to 100% and is then scaling with the
   * available space if not the absolute space required is used
   * default: true
   */
  useMaxWidth?: boolean;

  /**
   * This will display arrows that start and begin at the same node as right angles, rather than a curve
   * Default value: false
   */
  rightAngles?: boolean;
}

export interface GanttConfig {
  /**
   * **titleTopMargin** - margin top for the text over the gantt diagram
   * default: 25
   */
  titleTopMargin?: number;

  /**
   * **barHeight** - the height of the bars in the graph
   * default: 20
   */
  barHeight?: number;

  /**
   * **barGap** - the margin between the different activities in the gantt diagram
   * default: 4
   */
  barGap?: number;

  /**
   *  **topPadding** - margin between title and gantt diagram and between axis and gantt diagram.
   * default: 50
   */
  topPadding?: number;

  /**
   *  **leftPadding** - the space allocated for the section name to the left of the activities.
   * default: 75
   */
  leftPadding?: number;

  /**
   *  **gridLineStartPadding** - Vertical starting position of the grid lines
   * default: 35
   */
  gridLineStartPadding?: number;

  /**
   *  **fontSize** - font size ...
   * default: 11
   */
  fontSize?: number;

  /**
   * **fontFamily** - font family ...
   * default:  '"Open-Sans", "sans-serif"'
   */
  fontFamily?: string;

  /**
   * **numberSectionStyles** - the number of alternating section styles
   * default: 4
   */
  numberSectionStyles?: number;

  /**
   * **axisFormat** - datetime format of the axis, this might need adjustment to match your locale and preferences
   * default: '%Y-%m-%d'
   */
  axisFormat?: string;
}
