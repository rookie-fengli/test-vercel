'use client';
import { useEffect } from 'react';
import G6 from '@antv/g6';

export default function AboutIndex() {
  const init = () => {
    const COLLAPSE_ICON = function COLLAPSE_ICON(x, y, r) {
      return [
        ['M', x - r, y - r],
        ['a', r, r, 0, 1, 0, r * 2, 0],
        ['a', r, r, 0, 1, 0, -r * 2, 0],
        ['M', x + 2 - r, y - r],
        ['L', x + r - 2, y - r],
      ];
    };
    const EXPAND_ICON = function EXPAND_ICON(x, y, r) {
      return [
        ['M', x - r, y - r],
        ['a', r, r, 0, 1, 0, r * 2, 0],
        ['a', r, r, 0, 1, 0, -r * 2, 0],
        ['M', x + 2 - r, y - r],
        ['L', x + r - 2, y - r],
        ['M', x, y - 2 * r + 2],
        ['L', x, y - 2],
      ];
    };

    const data = {
      id: 'root',
      label: 'root',
      children: [
        {
          id: 'c1',
          label: 'c1',
          children: [
            {
              id: 'c1-1',
              label: 'c1-1',
            },
            {
              id: 'c1-2',
              label: 'c1-2',
              children: [
                {
                  id: 'c1-2-1',
                  label: 'c1-2-1',
                },
                {
                  id: 'c1-2-2',
                  label: 'c1-2-2',
                },
              ],
            },
          ],
        },
        {
          id: 'c2',
          label: 'c2',
        },
        {
          id: 'c3',
          label: 'c3',
          children: [
            {
              id: 'c3-1',
              label: 'c3-1',
            },
            {
              id: 'c3-2',
              label: 'c3-2',
              children: [
                {
                  id: 'c3-2-1',
                  label: 'c3-2-1',
                },
                {
                  id: 'c3-2-2',
                  label: 'c3-2-2',
                },
                {
                  id: 'c3-2-3',
                  label: 'c3-2-3',
                },
              ],
            },
            {
              id: 'c3-3',
              label: 'c3-3',
            },
          ],
        },
      ],
    };

    G6.registerEdge('flow-line', {
      draw(cfg, group) {
        const startPoint = cfg.startPoint;
        const endPoint = cfg.endPoint;

        const { style } = cfg;
        const shape = group.addShape('path', {
          attrs: {
            stroke: style.stroke,
            endArrow: style.endArrow,
            path: [
              ['M', startPoint.x, startPoint.y],
              ['L', startPoint.x, (startPoint.y + endPoint.y) / 2],
              ['L', endPoint.x, (startPoint.y + endPoint.y) / 2],
              ['L', endPoint.x, endPoint.y],
            ],
          },
        });

        return shape;
      },
    });

    const defaultStateStyles = {
      hover: {
        stroke: '#1890ff',
        lineWidth: 2,
      },
    };

    const defaultNodeStyle = {
      fill: 'yellow',
      stroke: '#40a9ff',
      radius: 5,
    };

    const defaultEdgeStyle = {
      stroke: '#91d5ff',
      endArrow: {
        path: 'M 0,0 L 12, 6 L 9,0 L 12, -6 Z',
        fill: '#91d5ff',
        d: -20,
      },
    };

    const defaultLayout = {
      type: 'compactBox',
      direction: 'TB',
      getId: function getId(d) {
        return d.id;
      },
      getHeight: function getHeight() {
        return 16;
      },
      getWidth: function getWidth() {
        return 16;
      },
      getVGap: function getVGap() {
        return 40;
      },
      getHGap: function getHGap() {
        return 70;
      },
    };

    const defaultLabelCfg = {
      style: {
        fill: '#000',
        fontSize: 12,
      },
    };

    const container = document.getElementById('container');
    const width = container.scrollWidth;
    const height = container.scrollHeight || 500;

    const graph = new G6.TreeGraph({
      container: 'container',
      width,
      height,
      linkCenter: true,
      plugins: [],
      modes: {
        default: ['drag-canvas', 'zoom-canvas'],
      },
      defaultNode: {
        type: 'icon-node',
        size: [120, 40],
        style: defaultNodeStyle,
        labelCfg: defaultLabelCfg,
      },
      defaultEdge: {
        type: 'flow-line',
        style: defaultEdgeStyle,
      },
      nodeStateStyles: defaultStateStyles,
      edgeStateStyles: defaultStateStyles,
      layout: defaultLayout,
    });

    graph.data(data);
    graph.render();
    graph.fitView();
  };
  useEffect(() => {
    init();
  });
  return <div id="container"></div>;
}
