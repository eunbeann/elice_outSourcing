/* ========================================================
 * !!! 주의 !!!
 * 해당 파일은 엘리스 외부 콘텐츠 프로젝트의 주요 부분이며, 허가 없이 수정할 수 없습니다.
 * 이와 관련하여 질문이 있으시면 연락 주시기 바랍니다.
 *
 * !!! Warning !!!
 * This file is core part of the Elice external contents project,
 * and should not be modified without permission.
 * If you have any questions, please contact us via contact point.
 * ======================================================== */

/* eslint-disable @typescript-eslint/no-empty-interface */

import { EliceExtTokenStorage } from '../utils/token';
import { _post } from './_api-helper';

//
//
//

export interface EliceExtApiSendScoreRequest {
  score: number;
}

export interface EliceExtApiSendScoreResponse {}

/**
 * send score to elice server.
 */
export const sendScore = async (params: EliceExtApiSendScoreRequest) => {
  const payload = EliceExtTokenStorage.get();
  return _post<EliceExtApiSendScoreResponse>(payload?.progressUrl, params);
};

//
//
//
