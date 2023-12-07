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

type Input = string | null | undefined;

//
//
//

/**
 * check fetch status
 */
const _status = async (res: Response) => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    const err = new Error(`Api responses with HTTP code ${res.status}.`);
    throw err;
  }
};

/**
 * fetch
 */
export const _fetch = async <T>(input: Input, init?: RequestInit) => {
  return input
    ? fetch(input, init)
        .then(_status)
        .then(res => res.json() as T)
    : Promise.reject(new Error('invalid url'));
};

/**
 * get
 */
export const _get = async <T>(input: Input, params?: Record<string, any>) => {
  const url = new URL(input ?? '');
  url.search = new URLSearchParams(params).toString();

  return _fetch<T>(url.href, {
    method: 'GET',
  });
};

/**
 * post
 */
export const _post = async <T>(input: Input, body?: Record<string, any>) => {
  return _fetch<T>(input, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};
