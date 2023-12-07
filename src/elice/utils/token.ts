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

import { camelizeKeys } from 'humps';
import { jwtDecode } from 'jwt-decode';

//
//
//

/**
 * Payload of external token (`extToken` at query string)
 */
export interface EliceExtTokenPayload {
  iss: 'elice-api';
  ts: number;
  uid: null;
  /**
   * Elice user ID.
   *
   * @example 123456
   */
  userId: string;
  /**
   * URL to post progress.
   *
   * @example 'https://api-esp-proxy.elice.io/default/progress/external?token=eyJhbGciO...XMBzpWggKKlv1-1o'
   */
  progressUrl: string;
  /**
   * Elice user ID of the tutor.
   * (present only if the user is a tutor at tutoring mode)
   *
   * @example 123456
   */
  tutorUserId?: number;
}

//
//
//

/**
 * decode external token.
 */
export function decodeExtToken(extToken: string) {
  return jwtDecode<EliceExtTokenPayload>(extToken);
}

/**
 * storage for external token payload.
 */
export const EliceExtTokenStorage = new (class ExtTokenStorage {
  #storage: Storage;
  #key: string;

  constructor() {
    this.#storage = sessionStorage;
    this.#key = `elice.matext.exttoken`;
  }

  /**
   * get external token payload.
   */
  get() {
    const raw = this.#storage.getItem(this.#key);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed.iss === 'elice-api' ? (parsed as EliceExtTokenPayload) : null;
  }

  /**
   * set external token payload.
   */
  set(value: EliceExtTokenPayload) {
    this.#storage.setItem(this.#key, JSON.stringify(camelizeKeys(value)));
  }

  /**
   * set external token payload from external token.
   */
  setToken(extToken: string) {
    const payload = decodeExtToken(extToken);
    this.set(payload);
  }

  /**
   * remove external token payload.
   */
  remove() {
    this.#storage.removeItem(this.#key);
  }
})();
