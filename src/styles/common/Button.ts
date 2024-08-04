import { css } from 'styled-components';
import { semantic } from '../semantic';
import { TYPO } from '../typo';

export const buttonType = {
  cta: css`
    background: ${semantic.light.accent.solid.normal};
    color: ${semantic.light.base.solid.white};
  `,
  neutral: css`
    background: ${semantic.light.fill.transparent.neutral};
    color: ${semantic.light.object.transparent.alternative};
  `,
  empty: css`
    color: ${semantic.light.object.transparent.alternative};
  `,
  label: css`
    padding: 8px 16px 8px 16px;
    color: ${semantic.light.object.transparent.alternative};
  `,
};

export const buttonSize = {
  lg: css`
    font-size: 18px;
    line-height: 24px;
    padding: 16px 16px 16px 20px;
    border-radius: 12px;
  `,
  md: css`
    font-size: 16px;
    line-height: 22px;
    padding: 12px 12px 12px 16px;
    border-radius: 12px;
  `,
  sm: css`
    font-size: 14px;
    line-height: 20px;
    padding: 10px 8px 10px 12px;
    border-radius: 8px;
  `,
  etc: css`
    ${TYPO.label4}
  `,
};
