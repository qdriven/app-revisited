import {it,expect, vi,describe} from "vitest"
import chalk from "chalk";
import {info,warn,error} from "../../src/utils/console-logger";

// Log info message with single string parameter
it('should log blue info message when called with string parameter', () => {
    const consoleSpy = vi.spyOn(console, 'log');

    info('test message');

    expect(consoleSpy).toHaveBeenCalledWith(chalk.blue('[INFO] test message'));

    consoleSpy.mockRestore();
});

describe("internal function all in one test", () => {
    it("console-log test", () => {
        info("Hello World");
        warn("Hello Warn@");
        error("Hello Error!!!");
    });
});