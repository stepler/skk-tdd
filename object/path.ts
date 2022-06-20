/**
 * Вовращает значение из структуры переданномупо пути из 
 */

import { isObject } from "../is/object";

export function path(path: string[], obj: Record<string, any>): any {
    let goal = obj;
    
    path.forEach(prop => {
        if (isObject(goal)) {
            if (goal.hasOwnProperty(prop)) {
                goal = goal[prop];
            } else {
                goal = undefined;
            }
        } else {
            goal = undefined;
        }
    });

    return goal;
}
