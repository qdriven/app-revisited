import { describe, expect, it } from "vitest";
import { executeCmd } from "../../src/utils/shell-executor";
import {info} from "../../src/utils/console-logger";

describe("execute shell commands", () => {
    it("execute shell commands", async () => {
        const result = executeCmd("ls");
        info(result);
    });
});
