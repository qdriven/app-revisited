import { describe, it } from "vitest";
import {info} from "../../src/utils/console-logger";
import {name,version} from "../../src/pkg";

describe("logging", () => {
    it("test version", () => {
        info("current version is ", version);
        info("current name is ", name);
    });
});
